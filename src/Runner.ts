import { spawn } from 'child_process';
import { LogOutput, LogError, LogExit } from './Logger';

export interface Result {
	command: string,
	stdout: string,
	stderr: string,
	exitCode: Number
};

export default function Run(args: string[], log?: boolean, env?: NodeJS.ProcessEnv): Promise<Result> {
	let command = args.join(' ');
	log && LogOutput(command);
	const proc = spawn(args.shift() || 'echo', args);

	let stdout: string[] = [], stderr: string[] = [];

	proc.stdout.on('data', data => {
		data = data.toString(); // safety
		stdout.push(data);
		log && LogOutput(data);
	});

	proc.stderr.on('data', data => {
		data = data.toString(); // safety
		stderr.push(data);
		log && LogError(data);
	});

	return new Promise((resolve, reject) => {
		proc.on('close', exitCode => {
			log && LogExit(exitCode);
			resolve({
				command,
				stdout: stdout.join('\n'),
				stderr: stderr.join('\n'),
				exitCode
			});
		});
	});
};