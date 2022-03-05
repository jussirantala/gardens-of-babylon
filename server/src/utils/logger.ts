import { getTimestamp } from './moment';

const logger = {
  debug: (...args: any[]) => console.debug(getTimestamp() + ' [DEBUG]:', ...args),
  log: (...args: any[]) => console.log(getTimestamp() + ' [LOG]:', ...args),
  error: (...args: any[]) => console.error(getTimestamp() + ' [ERROR]:', ...args),
  info: (...args: any[]) => console.info(getTimestamp() + ' [INFO]:', ...args),
  warn: (...args: any[]) => console.warn(getTimestamp() + ' [WARN]:', ...args),
};

export default logger;
