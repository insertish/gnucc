#!/usr/bin/env node
import { existsSync, writeFileSync, readFileSync } from 'fs';
import chalk from 'chalk';
import program from 'commander';
import gnucc from '.';
import { ProjectOptions } from './Options';
import { resolve } from 'path';

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
		let config: ProjectOptions = JSON.parse(readFileSync('gnucc.json').toString());

		let opt = Object.assign(
			config,
			{ project: true, log: true }
		);

		gnucc(opt).catch(err => console.log(chalk.red(err)));
	} else {
		console.error(chalk`{red Configuration file does not exist!}\n{gray Run {white gnucc --init} to generate one.}`);
	}
}