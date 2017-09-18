'use strict'; // is important for optimization also

var foo = 'bar';

function bar() {
  var foo = 'baz'; // this shadows global foo
}

// parameters are formal declarations
function baz(foo) {
  foo = 'bam';
  bam = 'yay'; // this, instead is not a formal declaration
  // lhs (left hand side) = target of an assignment
  // rhs (right hand side) = source of an assignment
}

// baz(); // `bam` is not defined
