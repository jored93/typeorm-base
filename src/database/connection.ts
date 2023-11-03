import { DataSource } from 'typeorm';
import {
    TYPEORM_HOST,
    TYPEORM_USERNAME,
    TYPEORM_PASSWORD,
    TYPEORM_DATABASE,
    TYPEORM_PORT,
    TYPEORM_SYNCHRONIZE,
    TYPEORM_LOGGING,
    TYPEORM_MIGRATIONS_RUN,
    PRODUCTION_ENV,
    TYPEORM_TYPE
} from '../config/index';

export const AppDataSource = new DataSource({
    type: TYPEORM_TYPE as 'mysql' | 'postgres' | 'mongodb',
    host: TYPEORM_HOST,
    port: 5434,
    username: TYPEORM_USERNAME,
    password: TYPEORM_PASSWORD,
    database: TYPEORM_DATABASE,
    logging: true,
    entities: ['src/entities/**/*.ts'],
    synchronize: true,
})