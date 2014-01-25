const QUOTE = "\"";
const ARRAY_LEFT = "[";
const ARRAY_RIGHT = "]";
const OBJECT_LEFT = "{";
const OBJECT_RIGHT = "}";
const COLON = ":";
const COMMA = ",";

JSON.stringify2 = function(object) {
	 if(Array.isArray(object)) {
		var output = ARRAY_LEFT;
		for(var i = 0, cache = object.length; i < cache; i++) output += (i ? COMMA : "") + JSON.stringify2(object[i]);
		return output + ARRAY_RIGHT;
	} else if(typeof object === "object" && object !== null) {
		var output = OBJECT_LEFT, i = 0;
		for(var key in object) {
			var val = object[key];
			if(val !== undefined && object.hasOwnProperty(key)) {
				output += (i++ ? COMMA : "") + QUOTE + key + QUOTE + COLON + JSON.stringify2(val);
			}
		}
		return output + OBJECT_RIGHT;
	} else return toStringLiteral(object);
};

function toStringLiteral(value) {
	var type = typeof value;
	if(value === null || type === "number" || type === "boolean") return value
	return QUOTE + value + QUOTE;
}