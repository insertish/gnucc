#!/usr/bin/env node
import { existsSync, writeFileSync, readFileSync } from 'fs';
import chalk from 'chalk';
import program from 'commander';
import gnucc from '.';

let { version } = require('../package.json');

program.version(version)
	.option('-i, --init', 'Initialise a new gnucc project.')
	.parse(process.argv);

if (program.init) {
	writeFileSync('gnucc.json', JSON.stringify({
		input: [
			'src/**/*.cpp',
			'src/**/*.cc',
			'src/**/*.c'
		],
		objOut: 'build/obj',
		output: 'build/bin'
	}, undefined, '\t'));
	console.log(chalk`{green Created configuration file!}`);
} else {
	if (existsSync('gnucc.json')) {
		let opt = Object.assign(
			JSON.parse(readFileSync('gnucc.json').toString()),
			{ project: true, log: true }
		);
		gnucc(opt);
	} else {
		console.error(chalk`{red Configuration file does not exist!}\n{gray Run {white gnucc --init} to generate one.}`);
	}
}