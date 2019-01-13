const { gcc, gpp, gnucc, OPTIMISATION, STAGES, WARN } = require('../');
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
		],
		optimisation: OPTIMISATION.HIGH,
		warning: [WARN.ALL]
	});

	console.log('');

	/**
	 * You can also compile files seperately and then link together
	 */
	await gpp({
		input: 'src/example.cc',
		output: 'out/example.o',
		includes: [
			'src/headers'
		],
		until: STAGES.COMPILE
	});

	await gpp({
		input: 'src/tester.cc',
		output: 'out/tester.o',
		includes: [
			'src/headers'
		],
		until: STAGES.COMPILE
	});

	await gpp({
		input: [
			'out/example.o',
			'out/tester.o'
		],
		output: 'out/multitest',
		includes: [
			'src/headers'
		]
	});

	/**
	 * Or you can let gnucc do this for you
	 */
	// TODO: Add project management.

	// clean up
	glob.sync('*.exe').forEach(x => unlinkSync(x));
})();