const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {type: String, required:true},
    email: {type: String, required:true},
    message: {type: String, required:true}
},{timestamps: true});

mongoose.models = {}
export default mongoose.model('contactUs',UserSchema)