import express = require("express");
import { AppDataSource } from "./data-source"
import { getRoutes } from "./routers";
import { handleAuthorizationError } from "./protect-routers";

AppDataSource.initialize().then(async () => {
    
    const app = express();

    app.use(express.json());
    app.use('/api', getRoutes(), handleAuthorizationError);

    app.listen(3000, () => { console.log('listening on port 3000') });

}).catch(error => console.log(error))
