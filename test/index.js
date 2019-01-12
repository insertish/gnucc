const gnucc = require('../dist/index');
const { GCC, GPP } = gnucc;
const { existsSync, mkdirSync } = require('fs');

(async() => {
	// ensure we have a build folder
	existsSync('./out') || mkdirSync('./out');

	// test gcc
	await GCC('src/main.c', 'out/main_c');

	// test g++
	await GPP('src/main.cpp', 'out/main_cpp');

	// test gnucc auto-select
	await gnucc.default('src/main.cc', 'out/main_cc');
})();