
import server from "./server";
import { PORT } from "./config/envs";
import "reflect-metadata"
import { AppDataSource } from "./config/data-source";

AppDataSource.initialize()
.then(res=> {
    console.log("conexion a la base de datos exitosa");
    server.listen(PORT, () => {
        console.log(`server listening on port ${PORT}`)
    });
})

