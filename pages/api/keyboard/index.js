import connectDB from '../../../utils/connectDb'
import Keyboard from '../../../models/keyboardModel'

connectDB()

export default async (req, res) => {
   switch(req.method){
      case "GET":
         await getKeyboards(req, res)
         break;
   }
}

class APIfeatures {
   constructor(query, queryString) {
      this.query = query;
      this.queryString = queryString;
   }
   filtering(){
      const queryObj = {...this.queryString}
      const excludeFields = ['page', 'sort', 'limit']
      excludeFields.forEach(el => delete(queryObj[el]))

      if (queryObj.category !== 'all') {
         this.query.find({category: queryObj.category})
      }

      if (queryObj.Name !== 'all') {
         this.query.find({Name: {$regex: queryObj.Name}})
      }

      this.query.find()
      return this;
   }

   /* sorting(){
      if(this.queryString.sort){
         const sortBy = this.queryString.sort.split(',').join(' ')
         this.query = this.query.sort(sortBy)
      } else {
         this.query = this.query.sort('-createdAt')
      }
   } */

   paginating() {
      const page = this.queryString.page * 1 || 1
      const limit = this.queryString.limit * 1 || 12
      const skip = (page - 1) * limit;
      this.query = this.query.skip(skip).limit(limit)
      return this;
   }
}

const getKeyboards = async (req, res) => {
   try {
      const features = new APIfeatures(Keyboard.find(), req.query)
      .filtering().paginating()

      const keyboards = await features.query
      console.log("IN API")
      res.json({
         status: 'success',
         result: keyboards.length,
         keyboards
      })
   } catch (err) {
      return res.status(500).json({err: err.message})
   }
}