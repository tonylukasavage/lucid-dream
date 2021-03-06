const Entity = require('../Entity');

class MusicTrigger extends Entity {
	/**
	 * Creates an instance of {@link MusicTrigger}, which is implemented by the underlying C# class `MusicTrigger` in Celeste.
	 * @constructor
	 * @extends Trigger
	 * @param {Object} [data={}] - An object containing the attributes of the {@link MusicTrigger} to be created
	 * @param {Number} [id] - unique id of the trigger
	 */
	constructor(data = {}, id) {
		return new Entity('musicTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data), id);
	}
}

module.exports = MusicTrigger;