import User from '../../models/User';
import connectDb from '../../middleware/mongoose';
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
  if (req.method == 'POST') {
    const {name,email,phone,ques} = req.body;
    let u = new User({name,email,password:CryptoJS.AES.encrypt(req.body.password,"jwtsecreat").toString(),phone,ques});
    await  u.save();
    res.status(200).json({ "success": true })
  }
  else {
    res.status(400).json({"sucess":false, error: "This method is not allowed" })
  }
  


}

export default connectDb(handler)
