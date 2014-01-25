# JSON.stringify2
A 112% faster implementation of a stripped down native JSON.stringify.

### Usage
Install via npm:

	$ npm install json.stringify2

Require the file and use away.
```js
var stringify2 = require("json.stringify2");

// Use like
stringify2({a: 1});

//Or
JSON.stringify2({a: 1});
```js

### `JSON.stringify2( object )`
Convert a Javascript object to a JSON string, with zero spacing rules (i.e. completed compacted.).

### Benchmarks
To run the benchmarks do `npm run benchmark` and wait for the results. As of version 0.1.0, the results are:

	Results
	-> benchmark/json.stringify2.js
	    stringify x 460,127 ops/sec ±0.52% (91 runs sampled)
	    stringify2 x 979,669 ops/sec ±0.54% (93 runs sampled)

Which equates to 112% performance increase.

### License
MIT