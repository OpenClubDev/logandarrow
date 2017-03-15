# logandarrow [![Travis][build-badge]][build]

[build-badge]: https://img.shields.io/travis/OpenClubDev/logandarrow/master.svg?style=flat-square
[build]: https://travis-ci.org/OpenClubDev/logandarrow
Log inline without breaking things

###How do I use it?

log and arrow acts as a super-simple log in front of an output - mostly due to our frustrating when debugging arrow functions returning an object.

```
var la = require('logandarrow');

var someArrowFunction = someVariable => ({
  stuff,
  returned,
  as,
  a
});

var someArrowFunctionWithLogAndArrow = someVariable => la()({
  stuff,
  returned,
  as,
  a
})

var someArrowFunctionWithLogAndArrowUsingAFunction = someVariable => la(console.trace)({
  stuff,
  returned,
  as,
  a
})


```
