'use strict';

var foo = 'bar';

function bar() {
  var foo = 'baz';

  function baz(foo) {
    foo = 'bam';
    bam = 'yay';
  }
  baz();
}

bar();
foo;
bam;
baz(); // baz is not defined