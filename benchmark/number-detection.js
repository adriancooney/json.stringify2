
var num = 1,
	str = "1";

add("Divide with num", function() {
	if(!isNaN(num/1)) return true;
});

add("Divide with str", function() {
	if(!isNaN(str/1)) return true;
});

add("typeof with num", function() {
	if(typeof num === "number") return true;
});

add("typeof with num", function() {
	if(typeof str === "number") return true;
});