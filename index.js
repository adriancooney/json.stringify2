/**
 * A 100% faster implementation of JSON.stringify because
 * it strips the frills and confetti.
 * @param  {Object} object An object to encode.
 * @return {String}        JSON encoded string.
 */
JSON.stringify2 = function(object) {
	// Stringify arrays by looping over their values
	if(Array.isArray(object)) {
		var output = "[";
		for(var i = 0, cache = object.length; i < cache; i++) output += (i ? COMMA : "") + JSON.stringify2(object[i]);
		return output + "]";
	}

	// Recur over objects
	if(object !== null && typeof object === "object") {
		var output = "{", i = 0;
		for(var key in object) {
			var val = object[key];
			if(val !== undefined) {
				output += (i++ ? "," : "") + "\"" + key + "\":" + JSON.stringify2(val);
			}
		}
		return output + "}";
	}

	// Return null without quotes
	if(object === null) return null;

	// Return boolean and numbers without quotes
	var type = typeof object;
	if(type === "number" || type === "boolean") return object;

	// Return strings, with quotes
	return "\"" + object + "\"";
};