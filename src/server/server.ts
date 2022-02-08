import express from 'express';
import * as http from 'http';
import Logger from '../config/logger/Logger';
import container from '../config/dependency-injection/awilix/awilix.config';

export class Server {
  private express: express.Express;
  private httpServer?: http.Server;
  private logger: Logger;
  private readonly port: string;

  constructor(port: string) {
    this.port = port;
    this.express = express();
    this.express.use(express.json());
    this.logger = container.resolve('logger');
  }

  async listen(): Promise<void> {
    return new Promise((resolve) => {
      this.httpServer = this.express.listen(this.port, () => {
        this.logger.info(
          `MovieDB Backend App is running at http://localhost:${this.port} in ${this.express.get('env')} mode`
        );
        this.logger.info('  Press CTRL-C to stop\n');
        resolve();
      });
    });
  }

  async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close((error) => {
          return reject(error);
        });
        return resolve();
      }
      return resolve();
    });
  }

  getHTTPServer() {
    return this.httpServer;
  }
}
