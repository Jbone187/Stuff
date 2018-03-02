

var winston = require('winston')

winston.add(
  winston.transports.File, {
    filename: './log/file.log',
    level: 'info',
    json: true,
    eol: 'rn', // for Windows, or `eol: ‘n’,` for *NIX OSs
    timestamp: true
  }
)

//winston.log('info', 'Hello log files!')
//winston.info('Hello again log files!')

module.exports.winston = winston;