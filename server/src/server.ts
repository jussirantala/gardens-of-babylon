process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import 'reflect-metadata';
import App from '@/app';
import { IndexController } from '@controllers/index.controller';
import { GardenController } from '@controllers/garden.controller';
import validateEnv from '@utils/validateEnv';
validateEnv();

const app = new App([IndexController, GardenController]);
app.listen();