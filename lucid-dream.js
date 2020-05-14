const config = require('./config/lucid-dream.json');
const classes = require('./lib/class');

class Lucid {
	/**
	 * Create an instance of Lucid. This is not usually invoked directly as an instance is provided automatically when calling `require('lucid-dream')`.
	 * @constructor
	 * @property {Object} config - The Lucid configuration object
	 * @property {Apply} Apply - The Apply class
	 * @property {Chapter} Chapter - The Chapter class
	 * @property {Decal} Decal - The Decal class
	 * @property {Dialog} Dialog - The Dialog class
	 * @property {Effect} Effect - The Effect class
	 * @property {Entity} Entity - The Entity class
	 * @property {Filler} Filler - The Filler class
	 * @property {Map} Map - The Map class
	 * @property {Mod} Mod - The Mod class
	 * @property {ObjectTiles} ObjectTiles - The ObjectTiles class
	 * @property {Parallax} Parallax - The Parallax class
	 * @property {Room} Room - The Room class
	 * @property {Side} Side - The Side class
	 * @property {Style} Style - The Style class
	 * @property {Tiles} Tiles - The Tiles class
	 * @property {Trigger} Trigger - The Trigger class
	 */
	constructor() {
		Object.assign(this, classes, { config });
	}
}

module.exports = new Lucid();