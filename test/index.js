const { gcc, gpp, gnucc } = require('../');
const { existsSync, mkdirSync, unlinkSync } = require('fs');
const glob = require("glob");

(async() => {
	// ensure we have a build folder
	existsSync('./out') || mkdirSync('./out');

	// test gcc
	await gcc('src/main.c', 'out/main_c');

	// test g++
	await gpp('src/main.cpp', 'out/main_cpp');

	// test gnucc auto-select
	await gnucc('src/main.c');

	// use options
	await gnucc({
		input: 'src/head.cpp',
		output: 'out/head',
		includes: [
			'src/headers'
		]
	});

	// clean up
	glob.sync('*.exe').forEach(x => unlinkSync(x));
})();