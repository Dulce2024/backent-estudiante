import 'reflect-metadata'
import { DataSource } from 'typeorm'
import dotenv from 'dotenv'

dotenv.config();

export const AppDataSourse = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: [
        'src/entity//*.ts'
    ]
    /*
    ,
    ssl:
        rejectUnauthorized: false
    */
});

export const connectDB = async () => {

    try {
        await AppDataSourse.initialize();
        console.log('Conectado a la base de datos');
    } catch(error){
        console.log('Error al concectarse a la base de datos', error);
    }
}