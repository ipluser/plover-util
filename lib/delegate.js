'use strict';


module.exports = function(o, target, methods) {
  for (const name of methods) {
    o[name] = target[name].bind(target);
  }
  return o;
};
