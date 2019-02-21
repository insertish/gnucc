import Run, { Result } from '../Runner';
import { GCCOptions } from '../Options';
import { ProcessGccOpt, ProcessEnv } from '../Config';

/**
 * Compiles a source file with GCC
 * @param input Source file to be compiled
 * @param output Output file
 */
export default async function gcc(input: string, output?: string, log?: boolean): Promise<Result>;

/**
 * Compiles a source file according to the options passed with GCC
 * @param opt GCC compiler options
 */
export default async function gcc(opt: GCCOptions): Promise<Result>;

export default async function gcc(optOrInput: GCCOptions | string, output?: string, log: boolean = true) {
	let binary = 'gcc';
	let args: string[] = [];
	let env;

	if (typeof optOrInput === 'string') {
		args.push(optOrInput);
		output && args.push('-o', output);
	} else {
		env = ProcessEnv(optOrInput);
		if (optOrInput.binaries && optOrInput.binaries.gcc) binary = optOrInput.binaries.gcc;
		args.push(...ProcessGccOpt(optOrInput));
		log = optOrInput.log || false;
	}

	args.unshift(binary);
	return await Run(args, log, env);
};