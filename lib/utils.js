const camelcase = require('camelcase');
const config = require('../config/lucid-dream.json');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { promisify } = require('util');

exports.findCelesteDir = async function() {
	const access = promisify(fs.access);
	const platform = os.platform();
	let searchDirs = config.celesteDir ? [ config.celesteDir ] : [];
	let celesteDir;

	if (platform === 'darwin') {
		searchDirs.push(path.join(os.homedir(), 'Library', 'Application Support', 'Steam', 'steamapps', 'common', 'Celeste', 'Celeste.app', 'Contents', 'MacOS'));
	} else if (platform === 'win32') {
		searchDirs.push(
			'C:\\Program Files (x86)\\Steam\\steamapps\\common\\Celeste',
			'C:\\Program Files\\Steam\\steamapps\\common\\Celeste'
		);
	}

	for (let dir of searchDirs) {
		try {
			await access(dir, fs.constants.F_OK);
			celesteDir = dir;
		} catch (err) {
			continue;
		}
	}

	if (!celesteDir) {
		throw new Error(`Unable to find Celeste installation directory. The following locations were searched:\n\n${searchDirs.join('\n')}`);
	}

	return celesteDir;
};

exports.safeName = function(name, opts = {}) {
	const { capFirst } = opts;
	let newName = camelcase(name).replace(/[^a-z0-9]/gi, '');
	if (capFirst) {
		newName = exports.capFirst(newName);
	}
	return newName;
};

exports.capFirst = function(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

const attributes = exports.attributes = function(element) {
	if (!element) { return {}; }
	return Object.keys(element)
		.filter(a => a.indexOf('__') !== 0)
		.reduce((a,c) => {
			a[c] = element[c];
			return a;
		}, {});
};

const children = exports.children = function(element) {
	if (!element) { return []; }
	return element.__children || [];
};

const loadDataAsDict = exports.loadDataAsDict = function(target, data) {
	const name = data.__name;
	target[name] = {};

	for (let [ attr, value ] of Object.entries(attributes(data))) {
		target[name][attr] = value;
	}

	for (let child of children(data)) {
		loadDataAsDict(target[name], child);
	}
};

const dictAsEncodedData = exports.dictAsEncodedData = function(name, data) {
	const res = {
		__name: name,
		__children: []
	};

	for (let [ key, value ] of Object.entries(data)) {
		if (!Array.isArray(value) && typeof value === 'object') {
			res.__children.push(dictAsEncodedData(key, value));
		} else {
			res[key] = value;
		}
	}

	if (!res.__children.length) {
		delete res.__children;
	}

	return res;
};

exports.findChildWithName = function(element, name, def = {}) {
	for (let child of (element.__children || [])) {
		if (child.__name === name) {
			return child;
		}
	}
	return def;
};

exports.fill2dArray = function(val, x, y) {
	const array = [];
	for (let i = 0; i < y; i++) {
		array.push((new Array(x)).fill(val));
	}
	return array;
};

exports.isNumber = function(o) {
	return typeof o === 'number' && isFinite(o);
};

exports.isFloat = function(o) {
	return exports.isNumber(o) && !Number.isInteger(o);
};