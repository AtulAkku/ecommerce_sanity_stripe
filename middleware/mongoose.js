import mongoose from 'mongoose';

const connectDb = handler => async (req,res)=>{
    if(mongoose.connections[0].readyState){
     return handler(req,res)   
    }
//    await mongoose.connect("mongodb://0.0.0.0:27017/registration")
    await mongoose.connect('mongodb://0.0.0.0:27017/registration', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
   return handler(req,res);
}

export default connectDb;