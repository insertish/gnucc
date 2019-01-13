import { ProjectOptions, GCCOptions, GPPOptions } from "./Options";
import { resolve } from "path";

export function ProcessOpt(opts: ProjectOptions): string[] {
	let args = [];

	// Project
	opts.input			&& (Array.isArray(opts.input) ? args.push(...opts.input.map(x => resolve(x))) : args.push(resolve(opts.input)));
	opts.output			&& args.push('-o', resolve(opts.output));
	opts.includes		&& args.push(...opts.includes.map(x => `-I${resolve(x)}`));
	opts.libraries		&& args.push(...opts.libraries.map(x => `-L${resolve(x)}`));

	// Compiler
	opts.optimisation	&& args.push(`-O${opts.optimisation}`);
	opts.until			&& args.push(opts.until);
	opts.warning		&& args.push(...opts.warning.map(x => `-W${x}`));
	opts.logCompile		&& args.push('-Q');
	opts.args			&& args.push(...opts.args);

	return args;
}

export function ProcessGccOpt(opts: GCCOptions): string[] {
	let args = ProcessOpt(opts);

	// C Options
	opts.useANSI			&& args.push('-ansi');
	opts.combineSourceFiles && args.push('-combine');
	opts.std				&& args.push(`--std=${opts.std}`);

	return args;
}

export function ProcessGppOpt(opts: GPPOptions): string[] {
	let args = ProcessOpt(opts);

	// C++ Options
	opts.std && args.push(`--std=${opts.std}`);

	return args;
}