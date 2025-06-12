import mongoose from "mongoose";

export const MongoDbConnect=async()=>{
    try {
        mongoose.connect(process.env.Mongodb_URI).then(()=>{
            console.log(`mongodb is connected`);
            
        })
    } catch (error) {
        console.log(error);
        
    }
}