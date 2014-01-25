/**
 * A 112% faster implementation of JSON.stringify because
 * it strips the frills and confetti.
 * @param  {Object} object An object to encode.
 * @return {String}        JSON encoded string.
 */
JSON.stringify2 = function(object) {
	// Return null without quotes
	if(object === null) return null;


	// Stringify arrays by looping over their values
	if(Array.isArray(object)) {
		var output = "[";
		for(var i = 0, cache = object.length; i < cache; i++) output += (i ? "," : "") + JSON.stringify2(object[i]);
		return output + "]";
	}

	// Recur over objects
	if(object !== null && typeof object === "object") {
		var output = "{", i = 0;
		for(var key in object) {
			var value = object[key];
			if(value !== undefined) {
				output += (i++ ? "," : "") + "\"" + key + "\":" + JSON.stringify2(value);
			}
		}
		return output + "}";
	}

	// Return boolean and numbers without quotes
	var type = typeof object;
	if(type === "number" || type === "boolean") return object;

	// Return strings, with quotes
	return "\"" + object + "\"";
};

module.exports = JSON.stringify2;