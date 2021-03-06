const Entity = require('../Entity');

class DashSwitchH extends Entity {
	/**
	 * Creates an instance of {@link DashSwitchH}, which is implemented by the underlying C# class  in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link DashSwitchH} to be created
	 */
	constructor(data = {}) {
		return new Entity('dashSwitchH', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = DashSwitchH;