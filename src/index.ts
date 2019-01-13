import { resolve } from 'path';
import { sync as globSync } from 'glob';
import { existsSync, statSync } from 'fs';
import chalk from 'chalk';

import { gcc, gpp } from './compilers';
import { GCCOptions, GPPOptions, OPTIMISATION, STAGES, WARN } from './Options';
import { Result } from './Runner';

export * from './compilers';
export {
	OPTIMISATION as OPTIMISATION,
	STAGES as STAGES,
	WARN as WARN
};

/**
 * Compiles a source file
 * @param input Source file to be compiled
 * @param output Output file
 */
export async function gnucc(input: string, output?: string, log?: boolean): Promise<Result>;

/**
 * Compiles a source file according to the options
 * @param opt Compiler options
 */
export async function gnucc(opt: GCCOptions | GPPOptions): Promise<Result>;

export async function gnucc(optOrInput: GCCOptions | GPPOptions | string, output?: string, log: boolean = true) {
	let ext;
	if (typeof optOrInput === 'string') {
		ext = optOrInput.split('.').pop();
		switch (ext) {
			case 'cpp':
			case 'cc':
				return await gpp(optOrInput, output, log);
			case 'c':
			default:
				return await gcc(optOrInput, output, log);
		}
	} else {
		let inp = optOrInput.input;
		if (optOrInput.project) {
			if (!Array.isArray(inp)) throw new Error("Input must be array!");
			if (!optOrInput.objOut) throw new Error("No output directory for objects!");

			let globbed: string[] = [];
			inp.forEach(x => globbed.push(...globSync(x)));
			inp = globbed;

			let objects = inp.map(x => resolve(<string> optOrInput.objOut, x.replace(/\\|\//g, '_') + '.o'));
			
			let compiler: Function = gnucc;
			inp.forEach(x => {
				let ext = x.split('.').pop() || '';
				if (['cpp', 'cc'].indexOf(ext) > -1) compiler = gpp;
			});

			for (let i in inp) {
				if (existsSync(objects[i])) {
					let is = statSync(inp[i]).mtimeMs;
					let os = statSync(objects[i]).mtimeMs;
					optOrInput.log && console.log(chalk`{gray ~ Skipping ${inp[i]}, object file is newer.}`);
					if (os > is) continue;
				}

				await compiler(Object.assign({}, optOrInput, {
					project: false,
					input: inp[i],
					until: STAGES.COMPILE,
					output: objects[i]
				}));
			}

			return await compiler(Object.assign(optOrInput, {
				project: false,
				input: objects
			}));
		}
		ext = Array.isArray(inp) ?
			inp[0].split('.').pop() : inp.split('.').pop();
		switch (ext) {
			case 'cpp':
			case 'cc':
				return await gpp(<GPPOptions> optOrInput);
			case 'c':
			default:
				return await gcc(<GCCOptions> optOrInput);
		}
	}
};

export default gnucc;