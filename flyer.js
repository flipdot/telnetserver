var fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/flyer_test.log', {flags : 'w'});
var log_stdout = process.stdout;

console.log = function(d) { //
  log_file.write(util.format(d) + '\n');
  log_stdout.write(util.format(d) + '\n');
};



var net = require('net');
var server = net.createServer(function (socket) {
  socket.write('\r\n');
  socket.write('\r\n');
  socket.write('\33[33m                 .-==-,   \33[37m  .-==-,    \r\n');
  socket.write('\33[33m               ,\"     \\_\33[37m  ,\"     \\_ \r\n');
  socket.write('\33[33m               |\33[37m  flip \33[33m | \33[37m|\33[33m  dot \33[37m  |  \r\n');
  socket.write('\33[33m               \`.      ,\'\33[37m \`.      ,\'  \r\n');
  socket.write('\33[33m                 \`\"--\"\' \33[37m    `\"--\" \r\n');
  socket.write('\33[0m                       kassel                        \r\n');
  socket.write('                    lädt ein zur                     \r\n');
  socket.write('          ---   pizzaprogrammiernacht   ---          \r\n');
  socket.write('\r\n');
  socket.write('                25.11.2016 - ab 20:00                \r\n');
  socket.write('                    bis 27.11.2016                   \r\n');
  socket.write('\r\n');
  socket.write('              im flipdot hackerspace                 \r\n');
  socket.write('           franz-ulrich-straße 18, kassel            \r\n');
  socket.write('\r\n');
  socket.write('     *******************************************     \r\n');
  socket.write('     *             pizza-flatrate              *     \r\n');
  socket.write('     *                                         *     \r\n');
  socket.write('     *     5€ kostenbeteiligung pro person     *     \r\n');
  socket.write('     *    platinen- & mechanikteile fräsen     *     \r\n');
  socket.write('     *         elektronik-bausteln             *     \r\n');
  socket.write('     *         pizzateig herstellen            *     \r\n');
  socket.write('     *            git 2 & github               *     \r\n');
  socket.write('     *                golang                   *     \r\n');
  socket.write('     *             rust & kotlin               *     \r\n');
  socket.write('     *                 uvm.                    *     \r\n');
  socket.write('     *******************************************     \r\n');
  socket.write('\r\n');
  socket.write('          anmeldung nötig: com@flipdot.org           \r\n');
  socket.write('           übernachtungsplätze auf anfrage           \r\n');
  socket.write('              wir freuen uns auf euch!               \r\n');
  socket.write('                https:\/\/flipdot.org                \r\n');
  console.log('Anfrage erhalten');
  socket.end();
}).listen(23);
