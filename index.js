const QUOTE = "\"";
const ARRAY_LEFT = "[";
const ARRAY_RIGHT = "]";
const OBJECT_LEFT = "{";
const OBJECT_RIGHT = "}";
const COLON = ":";
const COMMA = ",";

JSON.stringify2 = function(object) {
	if(Array.isArray(object)) {
		var output = "[";
		for(var i = 0, cache = object.length; i < cache; i++) output += (i ? COMMA : "") + JSON.stringify2(object[i]);
		return output + "]";
	}

	if(typeof object === "object" && object !== null) {
		var output = "{", i = 0;
		for(var key in object) {
			var val = object[key];
			if(val !== undefined && object.hasOwnProperty(key)) {
				output += (i++ ? "," : "") + "\"" + key + "\":" + JSON.stringify2(val);
			}
		}
		return output + "}";
	}

	if(object === null) return null;

	var type = typeof object;
	if(type === "number" || type === "boolean") return object;

	return "\"" + object + "\"";
};