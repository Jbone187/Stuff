

let winston = require('winston')

winston.add(
  winston.transports.File, {
    filename: './log/file.log',
    level: 'info',
    json: true,
    eol: 'rn', // for Windows, or `eol: ‘n’,` for *NIX OSs
    timestamp: true
  }
);

module.exports.winston = winston;
