import mongoose, { Schema } from 'mongoose'

const KeyboardDB = new mongoose.Schema({
   _id: Schema.Types.ObjectId,
   EbayId: String,
   Name: String,
   Price: Number,
   Link: String,
   Standing: String,
   Image: String 
}, {collection: 'KeyboardDB'})

let Dataset = mongoose.models.keyboard || mongoose.model('keyboard', KeyboardDB)
export default Dataset