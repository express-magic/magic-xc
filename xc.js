'use strict';

var exec = require('child_process').exec
  , log  = require('magic-log')

function xc(cmd, cb) {
  exec(cmd, function (err, stdout, stderr) {
    execCb(cb, err, stdout, stderr);
  });
}

function execCb(cb, err, stdout, stderr) {
  err = err || stderr;
  if ( err ) { log(err, 'error'); }
  if ( stdout ) { log(stdout); }
  if ( stderr ) { log(stderr, 'error'); }

  cb(err, stdout);
}

module.exports = xc;