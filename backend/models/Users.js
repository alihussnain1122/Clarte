const mongoose= require('mongoose')

mongoose.connect(process.env.MONGO_URI,{

})

const user=new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:false
    } 
});

const User=mongoose.model('User',user);
module.exports=User;