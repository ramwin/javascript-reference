import { Logger } from 'tslog';

const log = new Logger({
  displayFunctionName: false,
  displayFilePath: 'hidden',
  displayLoggerName: false,
});

log.info('This is a log message'); // will output file name and line number
