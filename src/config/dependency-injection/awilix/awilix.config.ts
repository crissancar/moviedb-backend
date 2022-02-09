import { asClass, createContainer } from 'awilix';
import WinstonLogger from '../../logger/winston/WinstonLogger';
import { StatusGetController } from '../../../modules/status/controllers/StatusGetController';

const container = createContainer({ injectionMode: 'CLASSIC' });

container.register({
  logger: asClass(WinstonLogger).scoped(),

  statusGetController: asClass(StatusGetController).scoped(),
});

export default container;
