import mongoose from "mongoose";

const connectDB = async ()=>{
    try{

        const connect= await mongoose.connect(`${process.env.CONNECTION_STRING}`)
        console.log("connected with mongodb database", connect.connection.name);
    }

    catch(error){
        console.log("failed to connect to mongodb",error);
        process.exit(1);
    }
}


export default connectDB;
