'use strict';

exports.__esModule = true;

exports.debug = function(prefix, options = {}) {
  var prefixString = `[${prefix}]`;

  function log() {
    var args = Array.prototype.slice.call(arguments);
    args.unshift(prefixString);
    console.log.apply(console, args);
  }
  function error() {
    var args = Array.prototype.slice.call(arguments);
    args.unshift(prefixString);
    console.error.apply(console, args);
  }
  function trace() {
    console.log(`${prefixString} Trace`);
    console.trace.apply(args);
  }
  return { log, error, trace };
}

module.exports = function(type = console.log) {
  if (typeof type !== 'function') {
    throw Error(`Output handler must be a function, you provided ${typeof type}.`);
  }
  return function(variable) {
    var prefix = typeof variable;
    if (typeof variable !== 'object' && typeof variable.name !== 'undefined') {
      prefix = variable.name;
    }
    type(`[${prefix}]`, variable);
    return variable;
  }
}
