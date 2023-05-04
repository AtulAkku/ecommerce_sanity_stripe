import User from '../../models/User'
import connectDb from '../../middleware/mongoose'
import jsonwebtoken from 'jsonwebtoken'


const handler = async (req, res) => {
   if(req.method=="POST"){
    let jwt = req.body.token
    let user = jsonwebtoken.verify(jwt,'jwtsecreat')
     await User.findOneAndUpdate({email:user.email},{address:req.body.address,pincode:req.body.pincode,phone:req.body.phone,name:req.body.name})
    // console.log(dbuser)
 
    res.status(200).json({ success:true})

   
}else{

       res.status(500).json({ error:error })
   }
   
   
  }
  


  export default connectDb(handler)