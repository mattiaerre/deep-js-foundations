# 01-scope

- Scope: where to look for things

- JavaScript is a compiled language (not based on the distribution type of the programm), not an interpreted one

- Who is doing the looking?

- Scope is a compiled time process

- How can you prove that JavaScript is a compiled language? (it is a minimum dual pass)

- It is compiled or it is parsed? It is compiled

- During the 1st pass the Scope is defined

- JavaScript has function scope only*

- Conversation between the Compiler and the Scope manager (1st pass, compile time)

- Have you ever heard of them?

- Conversation between the JavaScript engine and the Scope manager (2nd pass, runtime)

- Go fish!

- Global scope is the end; it creates at run time a global variable calledd `bam` and assigns the value `"yay"` (implicit auto global)


- Function declaration `function foo() { ... }` vs. Function expression `var foo = function bar() { ... }`

- Named function expressions: benefits: 1. Handy function self-reference, 2. More debuggable stack traces, 3. More self-documenting code
