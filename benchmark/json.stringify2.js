var js2 = require("./../");

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
	g: null
};

add("stringify", function() {
	JSON.stringify(o);
});

add("stringify2", function() {
	JSON.stringify2(o);
})