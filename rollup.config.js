import babel from "rollup-plugin-babel";

module.exports = {
	input: "src/browserdom.js",
	output: {
		name: "BrowserDOM",
		file: "dist/browserdom.min.js",
		format: "umd",
	},
	plugins: [
		babel({
			exclude: "node_modules/**", // only transpile our source code
		}),
	],
};
