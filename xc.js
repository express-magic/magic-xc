'use strict';

var exec = require('child_process').exec
  , log  = require('magic-log')

function xc(cmd, cb) {
  exec(cmd, function (err, stdout, stderr) {
    execCb(cb, err, stdout, stderr);
  });
}

function xc(cmd, args, cb) {
  exec(cmd, function (err, stdout, stderr) {
    args.stdout = stdout;
    execCb(cb, err, args, stderr);
  });
}

function execCb(cb, err, args, stderr) {
  err = err || stderr;
  if ( err ) { log(err, 'error'); }
  if ( args ) { log(args); }
  if ( stderr ) { log(stderr, 'error'); }

  cb(err, args);
}

module.exports = xc;
