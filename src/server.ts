
import app from "./app";
import mongoose from "mongoose";
import config from "../src/config";


// const port = 3000;
let server:any;
(async()=> {
    try {
        server = app.listen(config.PORT, () => {
            console.log(config.PORT);
            console.log(`Example app listening on port ${config.PORT}`);
        });

        await mongoose.connect(`${config.DATABASE_URI}`);
    } catch (error) {
        console.log(error, "server related problem");
    }
    
})();
process.on('unhandledRejection', ()=>{
    console.log('unhandledRejection error, 😡 shutting down server');
    if(server){
        server.close(()=>{
            process.exit(1)
        })
    }
    process.exit(1)
})

process.on('uncaughtException',()=>{
    console.log('uncaughtException error, 😡 shutting down server');
    process.exit(1)
})

// console.log(x);
// Promise.reject()