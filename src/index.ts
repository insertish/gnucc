import { gcc, gpp } from './compilers';
import { GCCOptions, GPPOptions } from './Options';
import { Result } from './Runner';
export * from './compilers';

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
		ext = Array.isArray(optOrInput.input) ?
			optOrInput.input[0].split('.').pop() : optOrInput.input.split('.').pop();
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