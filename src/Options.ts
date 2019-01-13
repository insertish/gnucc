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
	/** Make all warnings into errors */
	ERROR = 'error',
	/** Enables some extra warning flags taht are not enabled by -Wall */
	EXTRA = 'extra',
	/**
	 * DIALECT WARNINGS
	 */
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
	OVERLOADED_RESOLUTION = 'sign-promo',
	/**
	 * SYNTAX / LOGIC WARNINGS
	 */
	CHAR_SUBSCRIPTS = 'char-subscripts',
	COMMENTS = 'comment',
	FORMAT = 'format',
	FORMAT_Y2K = 'format-y2k',
	NO_FORMAT_CONTAINS_NUL = 'no-format-contains-nul',
	NO_FORMAT_EXTRA_ARGS = 'no-format-extra-args',
	NO_FORMAT_ZERO_LENGTH = 'no-format-zero-length',
	FORMAT_NONLITERAL = 'format-nonliteral',
	FORMAT_SECURITY = 'format-security',
	NON_NULL = 'nonnull',
	INIT_SELF = 'init-self',
	IMPLICIT_INT = 'implict-int',
	IMPLICIT_FUNCTION_DECLARATION = 'implicit-function-declaration',
	IMPLICIT = 'implicit',
	IGNORED_QUALIFIERS = 'ignored-qualifiers',
	MAIN = 'main',
	MISSING_BRACES = 'missing-braces',
	MISSING_INCLUDE_DIRS = 'missing-include-dirs',
	PARENTHESES = 'parentheses',
	SEQUENCE_POINT = 'sequence-point',
	RETURN_TYPE = 'return-type',
	SWITCH = 'switch',
	SWITCH_DEFAULT = 'switch-default',
	SWITCH_ENUM = 'switch-enum',
	SYNC_NAND = 'sync-nand',
	TRIGRAPHS = 'trigraphs',
	UNUSED_SET_PARAM = 'unused-but-set-parameter',
	UNUSED_SET_VAR = 'unused-but-set-variable',
	UNUSED_FUNC = 'unused-function',
	UNUSED_LABEL = 'unused-label',
	UNUSED_PARAM = 'unused-parameter',
	UNUSED_VAR = 'unused-var',
	UNUSED_VAL = 'unused-value',
	UNUSED = 'unused',
	UNINITIALIZED = 'uninitialized',
	UNKNOWN_PRAGMAS = 'unknown-pragmas',
	NO_PRAGMAS = 'no-pragmas',
	STRICT_ALIASING = 'string-aliasing',
	STRICT_OVERFLOW = 'string-overflow',
	ARRAY_BOUNDS = 'array-bounds',
	NO_ZERO_DIVISION = 'no-div-by-zero',
	SYSTEM_HEADERS = 'system-headers',
	FLOAT_EQ = 'float-equal',
	TRADITIONAL = 'traditional',
	TRADITIONAL_CONVERSION = 'traditional-conversion',
	UNDEFINED = 'undef',
	NO_ENDIF = 'no-endif-labels',
	SHADOW = 'shadow',
	UNSAFE_LOOP_OPTIMISATIONS = 'unsafe-loop-optimizations',
	NO_PEDANTIC_MS = 'no-pedantic-ms-format',
	POINTER_ARITH = 'pointer-artih',
	TYPE_LIMITS = 'type-limits',
	BAD_FUNC_CAST = 'bad-function-cast',
	CAST_QUALIFIER = 'cast-qual',
	CAST_ALIGN = 'cast-align',
	WRITE_STR = 'write-strings',
	CLOBBERED = 'clobbered',
	CONVERSION = 'conversion',
	EMPTY_BODY = 'empty-body',
	ENUM_COMPARE = 'enum-compare',
	SIGN_COMPARE = 'sign-compare',
	SIGN_CONVERSION = 'sign-conversion',
	ADDRESS = 'address',
	LOGICAL_OP = 'logical-op',
	AGGREGATE_RETURN = 'aggregate-return',
	NO_ATTRS = 'no-attributes',
	NO_MACRO_REDEFINE = 'no-builtin-macro-redefined',
	STRICT_PROTOTYPES = 'strict-prototypes',
	OLD_STYLE_DECL = 'old-style-declaration',
	OLD_STYLE_DEF = 'old-style-definition',
	MISSING_PARAM_TYPE = 'missing-parameter-type',
	MISSING_PROTOTYPES = 'missing-prototypes',
	MISSING_DECLARATIONS = 'missing-declarations',
	MISSING_FIELD_ININT = 'missing-field-initializers',
	MISSING_NO_RETURN = 'missing-noreturn',
	MISSING_FORMAT_ATTR = 'missing-format-attribute',
	NO_MULTICHAR = 'no-multichar',
	NO_DEPRECATED = 'no-deprecated',
	NO_DEPRECATED_DECLARATIONS = 'no-deprecated-declarations',
	NO_OVERFLOW = 'no-overflow',
	OVERRIDE_INIT = 'override-init',
	PACKED = 'packed',
	PACKET_BITFIELD = 'packed-bitfield-compat',
	PADDED = 'padded',
	REDUNDANT_DECL = 'redundant-decls',
	NESTED_EXTERNS = 'nested-externs',
	UNREACHABLE_CODE = 'unreachable-code',
	INLINE = 'inline',
	NO_INVALID_OFFSETOF = 'no-invalid-offsetof',
	NO_INT_TO_POINTER_CAST = 'no-int-to-pointer-cast',
	NO_POINTER_TO_INT_CAST = 'no-pointer-to-int-cast',
	INVALID_PCH = 'invalid-pch',
	LONG_LONG = 'long-long',
	VARIADIC_MACROS = 'variadic-macros',
	VLA = 'vla',
	VOLATILE_REGISTER_VAR = 'volatile-register-var',
	DISABLED_OPTIMISATION = 'disable-optimization',
	POINTER_SIGN = 'pointer-sign',
	STACK_PROTECTOR = 'stack-protector',
	NO_MUDFLAP = 'no-mudflap',
	OVERLENGTH_STRINGS = 'overlength-strings'
};

export enum DEBUG {
	/**
	 * Level of debugging information
	 */
	MINIMAL = '1',
	EXTRA = '3',
	/**
	 * Tools
	 */
	GDB = 'gdb',
	STABS = 'stabs',
	STABS_PLUS = 'stabs+',
	COFF = 'coff',
	XCOFF = 'xcoff',
	XCOFF_PLUS = 'xcoff+',
	VMS = 'vms'
}

export interface PreprocessorOptions {
	/** Defines macros */
	macros?: {
		name: string,
		definition?: string
	}[]
}

export interface CompilerOptions extends PreprocessorOptions {
	/** What optimisation level to use when compiling */
	optimisation?: OPTIMISATION,
	/** If specified, what earlier stage should the compiler stop at */
	until?: STAGES,
	/** What warnings should the compiler display? */
	warning?: WARN[],
	/** Debugging options */
	debug?: DEBUG[],

	/** Make GCC use pipes instead of temporary files? */
	usePipes?: boolean,
	/** Generate extra code to write profile information suitable for prof */
	prof?: boolean,
	/** Generate extra code to write profile information suitable for gprof */
	gprof?: boolean,
	/** Makes compiler print out statistics and information about each function as it is compiled. */
	logCompile?: boolean,

	/** Does not use standard system libraries when linking */
	noDefaultLibs?: boolean,
	/** Does not use standard system startup files or libraries when linking */
	noStandardLib?: boolean,

	/** Prevents linking with shared libraries */
	static?: boolean,
	/** Use static libgcc? -static-libgcc */
	staticLibGCC?: boolean,
	/** Use static libstc++? -static-libstdc++ */
	staticLibSTDcpp?: boolean
};

export interface ProjectOptions extends CompilerOptions {
	/** Generate object files, keep track of timestamps and compile automatically. [objOut must be set!] */
	project?: boolean,
	/** Input file(s), if array all items are globbed */
	input: string | string[],
	/** Objects folder */
	objOut?: string,
	/** Output file */
	output?: string,
	/** Header directories to be included, -I */
	includes?: string[],
	/** Library directories to be included, -L */
	libraries?: string[],
	/** Output logs when compiling */
	log?: boolean
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