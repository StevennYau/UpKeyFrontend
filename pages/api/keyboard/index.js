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

const getKeyboards = async (req, res) => {
   try {
      const keyboards = await Keyboard.find()
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