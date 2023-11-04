import 'reflect-metadata';
import express from 'express'
import {
    useContainer,
    useExpressServer,
    getMetadataArgsStorage
} from 'routing-controllers';
import { Container } from 'typedi';
import { controllers } from './controllers';
import { swaggerSpec } from './swagger';
import { DOCS_ENABLED } from './config';


// required by routing-controllers
useContainer(Container);

// Create express server
const app: express.Express = express();


const routingControllersOptions: any = {
    routePrefix: '/api/v1',
    defaultErrorHandler: false,
    cors: true,
    controllers,
    interceptors: []
};

useExpressServer(app, routingControllersOptions);

// Setup Swagger
if (DOCS_ENABLED === 'true') {
    swaggerSpec(getMetadataArgsStorage, routingControllersOptions, app);
}

export default app;