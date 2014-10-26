'use strict';

var exec = require('child_process').exec
  , log  = require('magic-log')
;


function XC (opts) {
  var self = this;
  self.options = opts || {}


  return function xc(cmd, options, cb) {
    if ( ! cb && typeof options === 'function' ) {
      cb = options;
      options = null;
    }
    options = options || self.options;

    exec(cmd, options, function (err, stdout, stderr) {
      execCb(cb, err, stdout, stderr);
    });
  }
}

function execCb(cb, err, args, stderr) {
  err = err || stderr;
  if ( err ) { log(err, 'error'); }
  if ( args ) { log(args); }
  if ( stderr ) { log(stderr, 'error'); }

  if ( typeof cb === 'function') {
    cb(err, args);
  }
}

module.exports = XC;
