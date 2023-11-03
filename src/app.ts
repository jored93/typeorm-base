import 'reflect-metadata';
import express from 'express'
import {
    useContainer,
    useExpressServer,
    getMetadataArgsStorage
} from 'routing-controllers';
import { Container } from 'typedi';
import { controllers } from './controllers';

import morgan from 'morgan'
import cors from 'cors'

// required by routing-controllers
useContainer(Container);

// Create express server
const app: express.Express = express();

/* app.use(morgan('dev'));
app.use(cors()); */

const routingControllersOptions: any = {
    routePrefix: '/api/v1',
    defaultErrorHandler: false,
    cors: true,
    controllers,
    interceptors: []
};

useExpressServer(app, routingControllersOptions);

export default app;