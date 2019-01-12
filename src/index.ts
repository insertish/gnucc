import { GCC, GPP } from './compilers';
import { GCCOptions, GPPOptions } from './Options';
import { Result } from './Runner';
export * from './compilers';

/**
 * Compiles a source file
 * @param input Source file to be compiled
 * @param output Output file
 */
export default async function gnucc(input: string, output?: string, log?: boolean): Promise<Result>;

/**
 * Compiles a source file according to the options
 * @param opt Compiler options
 */
export default async function gnucc(opt: GCCOptions | GPPOptions): Promise<Result>;

export default async function gnucc(optOrInput: GCCOptions | GPPOptions | string, output?: string, log: boolean = true) {
	if (typeof optOrInput === 'string') {
		let ext = optOrInput.split('.').pop();
		switch (ext) {
			case 'cpp':
			case 'cc':
				return await GPP(optOrInput, output, log);
			case 'c':
			default:
				return await GCC(optOrInput, output, log);
		}
	}
}