export enum OPTIMISATION {
	/** Reduce compilation time and make debugging produce the expected results. This is the default. */
	DEFAULT = '0',
	/** Optimize. Optimizing compilation takes somewhat more time, and a lot more memory for a large function. */
	LOW = '1',
	/** Optimize even more. GCC performs nearly all supported optimizations that do not involve a space-speed tradeoff. */
	MEDIUM = '2',
	/** Optimize yet more. -O3 turns on all optimizations specified by -O2 and also turns on the -finline-functions, -funswitch-loops, -fpredictive-commoning, -fgcse-after-reload, -ftree-vectorize and -fipa-cp-clone options. */
	HIGH = '3',
	/** Optimize for size. -Os enables all -O2 optimizations that do not typically increase code size. It also performs further optimizations designed to reduce code size. */
	FILESIZE = 's',
	/** O3 with fast calculations */
	FAST = 'fast'
};

export enum STAGES {
	/** Stop after the preprocessing stage; do not run the compiler proper. */
	PREPROCESSING = '-E',
	/** Compile or assemble the source files, but do not link. */
	COMPILE = '-c'
};

export enum WARN {
	/** Log all warnings */
	ALL = 'all',
	/** Warn when G++ generates code that is probably not compatible with the vendor-neutral C ++ ABI. */
	ABI = 'abi',
	/** Warn when a class seems unusable because all the constructors or destructors in that class are private, and it has neither friends nor public static member functions. */
	UNUSABLE = 'ctor-dtor-privacy',
	/** Warn when a class has virtual functions and accessible non-virtual destructor, in which case it would be possible but unsafe to delete an instance of a derived class through a pointer to the base class. */
	NON_VIRTUAL = 'non-virtual-dtor',
	/** Warn when the order of member initializers given in the code does not match the order in which they must be executed. */
	REORDER = 'reorder',
	/** Warn about violations of the following style guidelines from Scott Meyers' Effective C ++ book */
	EFFECTIVE = 'effc++',
	/** Warn also about the use of an uncasted "NULL" as sentinel. */
	NULL_SENTINEL = 'strict-null-sentinel',
	/** Disable warnings when non-templatized friend functions are declared within a template. */
	NON_TEMPLATIZED_FRIENDS = 'no-non-template-friend',
	/** Warn if an old-style (C-style) cast to a non-void type is used within a C ++ program. */
	OLD_CAST = 'old-style-cast',
	/** Warn when a function declaration hides virtual functions from a base class. */
	OVERLOADED_VIRTUAL = 'overloaded-virtual',
	/** Disable the diagnostic for converting a bound pointer to member function to a plain pointer. */
	PMF_CONVERSIONS = 'no-pmf-conversions',
	/** Warn when overload resolution chooses a promotion from unsigned or enumerated type to a signed type, over a conversion to an unsigned type of the same size. */
	OVERLOADED_RESOLUTION = 'sign-promo'
};

export interface CompilerOptions {
	/** What optimisation level to use when compiling */
	optimisation?: OPTIMISATION,
	/** If specified, what earlier stage should the compiler stop at */
	outputAfter?: STAGES,
	/** Make GCC use pipes instead of temporary files? */
	usePipes?: boolean,
	/** What warnings should the compiler display? */
	warning?: WARN[]
};

export interface ProjectOptions extends CompilerOptions {
	/** Output file */
	output?: string,
	/** Header directories to be included, -I */
	includes?: string[],
	/** Library directories to be included, -L */
	libraries?: string[],
	/** Output logs when compiling */
	log: boolean
};

export interface GCCOptions extends ProjectOptions {
	/** Use ANSI standard? */
	useANSI?: boolean,
	/** Combine source files when compiling? */
	combineSourceFiles?: boolean,
	/** Standard to use when compiling */
	std?: 'c90' | 'iso9899:1990' | 'iso9899:199409' | 'c99' | 'c9x' | 'iso9899:1999' | 'iso9899:199x' | 'c11' | 'iso9899:2011' | 'c17' | 'iso9899:2017' | 'gnu89' | 'gnu90' | 'gnu99' | 'gnu11'
};

export interface GPPOptions extends ProjectOptions {
	/** Standard to use when compiling */
	std?: 'c++98' | 'c++03' | 'c++11' | 'c++14' | 'c++17' | 'gnu++98' | 'gnu++11' | 'gnu++14' | 'gnu++17'
};