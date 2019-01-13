export enum Language {
	'C++' = 'cpp,cc',
	'C' = 'c',
	'Fortran' = 'f90',
	'Objective-C' = 'm,mm'
};

export function Resolve(ext: string | undefined): Language {
	let test = (ext || '').toLowerCase();
	if (Language["C++"].split(',').indexOf(test) > -1) {
		return Language["C++"];
	} else if (Language["Fortran"].split(',').indexOf(test) > -1) {
		return Language["Fortran"];
	} else if (Language["Objective-C"].split(',').indexOf(test) > -1) {
		return Language["Objective-C"];
	}
	return Language.C;
};