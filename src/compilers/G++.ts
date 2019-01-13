import Run, { Result } from '../Runner';
import { GPPOptions } from '../Options';
import { ProcessGppOpt } from '../Config';

/**
 * Compiles a source file with G++
 * @param input Source file to be compiled
 * @param output Output file
 */
export default async function gpp(input: string, output?: string, log?: boolean): Promise<Result>;

/**
 * Compiles a source file according to the options passed with G++
 * @param opt G++ compiler options
 */
export default async function gpp(opt: GPPOptions): Promise<Result>;

export default async function gpp(optOrInput: GPPOptions | string, output?: string, log: boolean = true) {
	let binary = 'g++';
	let args: string[] = [binary];

	if (typeof optOrInput === 'string') {
		args.push(optOrInput);
		output && args.push('-o', output);
	} else {
		args.push(...ProcessGppOpt(optOrInput));
		log = optOrInput.log || false;
	}

	return await Run(args, log);
};