
import mongoose  from "mongoose";


const connection = {}


async function dbConnect(){


    console.log('URL', process.env.MONGO_URL)

    if(connection.isConnected){
        return;
    }

    const db = await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=> console.log('DB CONNECTED')).catch(err => console.log('err', err))

    connection.isConnected = db &&  db.connections[0].readyState
}


export default dbConnect