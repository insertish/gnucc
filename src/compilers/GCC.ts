import Run, { Result } from '../Runner';
import { GCCOptions } from '../Options';

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
	let args: string[] = [binary];

	if (typeof optOrInput === 'string') {
		args.push(optOrInput);
		output && args.push('-o', output);
	} else {
		// options
	}

	return await Run(args, log);
}