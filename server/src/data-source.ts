import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Dvd } from "./entity/Dvd"
import { Kazetak } from "./entity/Kazetak"
import { Allapot } from "./entity/Allapot"
import { Kolcsonzottdvd } from "./entity/KolcsonzottDvd"
import { Kolcsonzottkazeta } from "./entity/kolcsonzottkazeta"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    database: "videokolcsonzo",
    synchronize: true,
    logging: false,
    entities: [User, Dvd, Kazetak, Allapot, Kolcsonzottdvd, Kolcsonzottkazeta],
    migrations: [],
    subscribers: [],
})
