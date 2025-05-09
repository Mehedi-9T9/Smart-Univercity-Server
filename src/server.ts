import app from "./app";
import mongoose from "mongoose";

const port = 3000;

(async()=> {
    try {
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`);
        });

        await mongoose.connect('mongodb://localhost:27017/smart-univercity');
    } catch (error) {
        
    }
    
})();