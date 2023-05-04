import User from '../../models/User'
import connectDb from '../../middleware/mongoose'
var CryptoJS = require("crypto-js");



const handler = async (req, res) => {
   if(req.method=="POST"){

    const{answer}=req.body
    let dbuser = await User.findOne({email:req.body.email})
    
    if(dbuser){
      const {ques}=dbuser

    if(answer==ques){

    await User.findOneAndUpdate({email:req.body.email},{password:CryptoJS.AES.encrypt(req.body.npassword,`jwtsecreat`).toString()})

    res.status(200).json({ success:true})
    return
    }
  }
  else{
    res.status(500).json({ error:error })
    return
  }
   
}else{

       res.status(500).json({ error:error })
       return
   }
   
   
  }
  


  export default connectDb(handler)