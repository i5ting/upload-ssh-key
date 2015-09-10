#!/usr/bin/env node

var child_process = require('child_process');

var argv = process.argv;
argv.shift();

var file_path = __dirname;
var current_path = process.cwd();

if ( argv.length > 1 ) {
  var first_arg = argv[0];
  if ( first_arg == '-h' || first_arg == '--help' ) {
    return console.log('skt deploy@127.0.0.1');
  }
}else{
  return console.log('请填写参数，用户名ip地址或者域名');
}

var h = argv[1];

if(h.split('@').length == 1){
  return console.log('请填写【用户名@ip地址】');
}

var s = "ssh " + h + " 'mkdir -p .ssh && cat >> ~/.ssh/authorized_keys' < ~/.ssh/id_rsa.pub"

console.log(s);

// execFile: executes a file with the specified arguments
child_process.exec(s,
  function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
});
