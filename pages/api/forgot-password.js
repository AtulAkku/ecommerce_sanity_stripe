import User from '../../models/User'
import connectDb from '../../middleware/mongoose'



const handler = async (req, res) => {
   if(req.method=="POST"){


    let dbuser = await User.findOne({email:req.body.email})
    
    if(dbuser){
      const {email}=dbuser
    res.status(200).json({ success:true,email})
    return
  }
  else{
    res.status(500).json({ error:error })
  }
   
}else{

       res.status(500).json({ error:error })
   }
   
   
  }
  


  export default connectDb(handler)