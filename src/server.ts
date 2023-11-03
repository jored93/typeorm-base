import "reflect-metadata"
import app from './app'
import { PORT, TYPEORM_PORT } from './config/index';
import { AppDataSource } from './database/connection';

const main = async () => {
    try {
        await AppDataSource.initialize();
        app.listen(PORT, () => {
            return console.log(
                `Server is listening on ${PORT}
Postgres database is listening on port ${TYPEORM_PORT}`
            );
        });
    } catch (error) {
        console.log(error);
    }
}

main();