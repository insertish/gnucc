# gnucc

> Node.js library for GCC and G++ compilers

- Simplified options and usage
- Types and intellisense support
- Supports compilation of C and C++ files through `gcc` and `g++`
- Also can be easily used with emscripten.

## Quick Start

> This method passes files directly, it is recommended you pass options as shown below.

```js
import { gnucc, gcc, gpp } from 'gnucc';

gnucc('file.cpp'); // compiles to executable

gnucc(input: string, output?: string, log?: boolean); // uses gcc or g++
gcc(input: string, ...); // uses gcc
gpp(input: string, ...); // uses g++
```

## Advanced Usage

> This example shows how to manually set some options.

```js
import { gnucc, OPTIMISATION, WARN } from 'gnucc';

await gnucc({
  input: 'src/head.cpp',
  output: 'out/head',
  includes: [
    'src/headers'
  ],
  binaries: {
    "gcc": 'gcc',
    "g++": 'g++'
  },
  optimisation: OPTIMISATION.HIGH,
  warning: [WARN.ALL]
});
```

## Automatic Project Compilation

> By enabling project mode gnucc handles a lot of the heavy lifting for you.

- Compiles to .o to reduce compile times in the future.
- Keeps track of timestamps to only compile required files.
- Ensures the correct compilers are used.

```js
import { gnucc } from 'gnucc';

await gnucc({
  project: true,
  input: [
    'src/example.cc',
    'src/tester.cc'
  ],
  objOut: 'out/',
  output: 'out/projecttest',
  includes: [
    'src/headers'
  ]
});
```