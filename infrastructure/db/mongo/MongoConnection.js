const  mongoose = require('mongoose');
const  dotenv = require('dotenv');
dotenv.config();

let db = process.env.mongoURI;

 const connectDB =async ()=>{
    try{
        await mongoose
        .connect(db,{ useNewUrlParser: true,
                    useUnifiedTopology: true ,
                    useCreateIndex: true })
        console.log("Mongodb connected")
    }
    catch(err){
        console.error(err.message)
        process.exit(1)
    }
}

module.exports= connectDB