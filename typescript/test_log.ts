import { Logger } from 'tslog';

const log = new Logger({
  displayFunctionName: false,
  displayFilePath: 'hidden',
  displayLoggerName: false,
});

log.info('This is a log message'); // will output file name and line number
log.warn('This is a warning message'); // will output file name and line number
log.error('This is a error message'); // will output file name and line number
