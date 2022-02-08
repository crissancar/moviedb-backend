import Logger from '../Logger';
import winston, { Logger as WinstonLoggerType } from 'winston';

enum Levels {
  DEBUG = 'debug',
  ERROR = 'error',
  INFO = 'info',
}

export default class WinstonLogger implements Logger {
  private logger: WinstonLoggerType;

  constructor() {
    this.logger = winston.createLogger({
      format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY/MM/DD HH:mm:ss' }),
        winston.format.printf((info) => `[${info.timestamp}] ${info.message}`)
      ),
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.colorize({ all: true }),
            winston.format.timestamp({ format: 'HH:mm:ss' }),
            winston.format.printf((info) => `[${info.level}] ${info.timestamp} ${info.message}`)
          ),
        }),
        new winston.transports.File({ filename: `logs/${Levels.DEBUG}.log`, level: Levels.DEBUG }),
        new winston.transports.File({ filename: `logs/${Levels.ERROR}.log`, level: Levels.ERROR }),
        new winston.transports.File({ filename: `logs/${Levels.INFO}.log`, level: Levels.INFO }),
      ],
    });
  }

  debug(message: string): void {
    this.logger.debug(message);
  }

  error(message: string | Error): void {
    this.logger.error(message);
  }

  info(message: string): void {
    this.logger.info(message);
  }
}
