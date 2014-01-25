var js2 = require("./../"),	
	assert = require("assert");


describe("json.stringify2", function() {
	it("should emulate json.strinify", function() {
		var o = {
			a: "string",
			b: 1,
			c: true,
			d: [1, 2, 3, 4, 5],
			e: {
				foo: {
					nested: true
				}
			},
			f: [{
				bar: 1,
				fub: {
					baz: "true"
				}
			}],
			f: undefined,
			g: null,
			h: (new Date).toJSON()
		};

		var control = JSON.stringify(o);
		var custom = JSON.stringify2(o);

		console.log("CONTROL", control);
		console.log("CUSTOM", custom);

		JSON.parse(custom);
		assert(custom === control);
	});
});