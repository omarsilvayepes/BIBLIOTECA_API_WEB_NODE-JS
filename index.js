let {createServer}  = require('./infrastructure/server/server')
let connectDB = require('./infrastructure/db/mongo/MongoConnection')


const start = async () => {
    try {
        await connectDB()
        await createServer()
    }catch (err) {
        console.log(err)
        process.exit(1);
    }
}

start()