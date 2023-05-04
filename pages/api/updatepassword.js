import User from '../../models/User'
import connectDb from '../../middleware/mongoose'
import jsonwebtoken from 'jsonwebtoken'
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
   if(req.method=="POST"){
    let jwt = req.body.token
    let user = jsonwebtoken.verify(jwt,'jwtsecreat')
    let dbuser = await User.findOne({email:user.email})
    // console.log(dbuser.password)
    const bytes = CryptoJS.AES.decrypt(dbuser.password,"jwtsecreat");
    let decryptedData = JSON.parse(JSON.stringify(bytes.toString(CryptoJS.enc.Utf8)));
    //  console.log(decryptedData)
    if(decryptedData == req.body.password && req.body.npassword == req.body.cpassword){
    await User.findOneAndUpdate({email:dbuser.email},{password:CryptoJS.AES.encrypt(req.body.npassword,`jwtsecreat`).toString()})
    res.status(200).json({ success:true})
    return
    }
    else{
    res.status(500).json({ success:false})
    return

    }
   
}else{

       res.status(500).json({ error:error })
       return
   }
   
   
  }
  


  export default connectDb(handler)