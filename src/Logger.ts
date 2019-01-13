import chalk from "chalk";

export function Trim(x: string): string[] {
	return x.split(process.cwd()).join('@').match(
		new RegExp(`.{1,${(process.stdout.columns || 0) - 2}}`, 'g')
	) || [];
};

export function LogOutput(output: string) {
	console.log(
		Trim(output).map(x => chalk.gray(`> ${x}`)).join('\n')
	);
};

export function LogAlert(output: string) {
	console.log(
		Trim(output).map(x => chalk.gray(`~ ${x}`)).join('\n')
	);
};

export function LogError(error: string) {
	console.log(
		Trim(error).map(x => chalk.red(`! ${x}`)).join('\n')
	);
};

export function LogExit(code: Number) {
	console.log(
		chalk.blue('# Exited with code ' + code)
	);
};