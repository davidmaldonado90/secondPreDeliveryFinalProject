import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const mongoDbConnect = ()=> {
    try {
        mongoose.connect(
            process.env.MONGO_URL,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,                
            }
        );
        console.log("Connected to MongoDB");
        
    } catch (error) {
        throw new Error(error)
    }
}

mongoDbConnect();

export default mongoose;