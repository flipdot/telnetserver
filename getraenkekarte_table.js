var fs = require('fs');
var util = require('util');
var log_stdout = process.stdout;

var net = require('net');
var server = net.createServer(function (socket) {
  socket.write('\r\n');
  socket.write('\r\n');
  socket.write('\33[33m               .-==-,   \33[37m  .-==-,    \r\n');
  socket.write('\33[33m             ,\"     \\_\33[37m  ,\"     \\_ \r\n');
  socket.write('\33[33m             |\33[37m  flip \33[33m | \33[37m|\33[33m  dot \33[37m  |  \r\n');
  socket.write('\33[33m             \`.      ,\'\33[37m \`.      ,\'  \r\n');
  socket.write('\33[33m               \`\"--\"\' \33[37m    `\"--\" \r\n');
  socket.write('\r\n');
  socket.write('          ---   Getraenkekarte   ---           \r\n');
  socket.write('\r\n');
  socket.write('\33[37m          Becks                   \33[33m2€           \r\n');
  socket.write('\33[31m          Tamate (hausgemacht!)   \33[33m1€           \r\n');
  socket.write('\33[37m          Club-Mate               \33[33m2€           \r\n');
  socket.write('\33[37m          Mio Mio Mate            \33[33m2€           \r\n');
  socket.write('\33[37m          Mio Mio Mate Banana     \33[33m2€           \r\n');
  socket.write('\33[37m          Mixery Gurana        \33[33m1,50€           \r\n');
  socket.write('\33[37m          Mixery Bier+Cola     \33[33m1,50€           \r\n');
  socket.write('\33[37m          Fortuna Apfelschorle \33[33m1,50€           \r\n');
  socket.write('\33[37m          Krombacher Radler       \33[33m2€           \r\n');
  socket.write('\33[37m          Wasser (Still + Medium) \33[33m1€           \r\n');
  socket.write('\33[37m\r\n')
  socket.write('\r\n');
  socket.end();
}).listen(4242);
