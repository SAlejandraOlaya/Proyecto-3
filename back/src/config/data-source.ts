import { DataSource } from "typeorm";
import { User } from "../entities/userEntity";
import { DB_HOST, DB_PASSWORD, DB_PORT, DB_USERNAME } from "./envs";
import { Appointment } from "../entities/appointmentsEntity";
import { Credential } from "../entities/credentialEntity";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: Number (DB_PORT),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "medical_appointments",
   // dropSchema: true,// limpia la base de datos 
    synchronize: true,
    logging: false,
    entities: [User, Appointment, Credential],
    subscribers: [],
    migrations: [],
})

export const userModel = AppDataSource.getRepository(User);
export const credentialModel = AppDataSource.getRepository(Credential);
export const appointmentModel = AppDataSource.getRepository(Appointment);