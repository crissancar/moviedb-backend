import { asClass, createContainer } from 'awilix';
import WinstonLogger from '../../logger/winston/WinstonLogger';

const container = createContainer({ injectionMode: 'CLASSIC' });

container.register({
  logger: asClass(WinstonLogger).scoped(),
});

export default container;
