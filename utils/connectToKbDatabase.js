/*import { MongoClient } from 'mongodb'

let uri = process.env.MONGODB_URL_KB
let dbName = process.env.DB_NAME

let cachedClient = null
let cachedDb = null

if (!uri) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

if (!dbName) {
  throw new Error(
    'Please define the MONGODB_DB environment variable inside .env.local'
  )
}

 export async function connectToKbDatabase() {
  
  //cachedClient = localStorage.getItem("cachedClient")
  //cachedDb = localStorage.getItem("cachedDb")
  console.log(cachedClient)
  console.log(cachedDb)
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb }
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  const db = await client.db(dbName)

 // localStorage.setItem('cachedClient', client)
 // localStorage.setItem('cachedDb', db)
  cachedClient = client
  cachedDb = db

  return { client, db }
}   */

import mongoose from 'mongoose'

const connectToKbDatabase = () => {
  console.log(mongoose.connections)
   if (mongoose.connections[0].readyState) {
      console.log('already connected.')
      return;
   }
   mongoose.connect(process.env.MONGODB_URL, {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true
   }, err => {
      if (err) throw err;
      console.log('connected to mongodb.')
   })
}

export default connectToKbDatabase  