const mongoose = require('mongoose');
const { type } = require('os');
require('dotenv').config();

const dbConnect = mongoose.connect(process.env.DATABASE);
dbConnect.then(()=>{
    console.log('database connected');
})
.catch((err)=>{
    console.log(err);
});

const userSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Types.ObjectId,
        ref:''
    },
    username:{
        type: String,
        unique: true,
        required: true
    },
    passsword:{
        type: String,
        required: true
    },
    profileImage:{
        type:Image.url
    },
    role:{
        enum:[]
    },
    email:{
        type:String
    },
    isVerified:{
        type:Boolean,
        default: false
    }

})
  const User=new mongoose.model('User',userSchema,'userCollection');
  module.exports =User;
