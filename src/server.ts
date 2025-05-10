
import app from "./app";
import mongoose from "mongoose";
import config from "../src/config";

// const port = 3000;

(async()=> {
    try {
        app.listen(config.PORT, () => {
            console.log(config.PORT);
            console.log(`Example app listening on port ${config.PORT}`);
        });

        await mongoose.connect(`${config.DATABASE_URI}`);
    } catch (error) {
        console.log(error, "server related problem");
    }
    
})();