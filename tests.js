'use strict';

// Super Lazy Test Handler

var la = require('./index.js');

var anObject = {};
var aFunction = function() {};
var aString = 'stuff';
var aNumber = 'number';

var testTypes = {
  'object': {},
  'function': function() {},
  'string': 'stuff',
  'number': 1,
  'boolean': false
}

var prefix;
var errors;

function success(i) {
  console.log('\x1b[32m%s\x1b[0m', i);
}

function error(i) {
  console.error('\x1b[31m%s\x1b[0m', i);
  errors = true;
}

function checkOutput(newPrefix) {
  prefix = newPrefix;
  console.log(newPrefix);
}

Object.keys(testTypes).map(function(value, key) {
  var testCase = testTypes[value];
  var test = `check ${value} returns ${value}`;
  if (testCase === la(checkOutput)(testCase)) {success(test)} else {error(test)};
  test = `check ${value} prefix is produced`;
  if (prefix === `[${value}]`) {success(test)} else {error(test)};
});

if (!errors) {
  process.exit(0);
} else {
  process.exit(1);
}
