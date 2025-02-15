const mongoose = require("mongoose");
const userSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true 
    },
    mobile: {
        type: String,
        required: true,
        unique: true 
    },
    image:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    is_admin:{
        type:Boolean,
        required:true
    },
    isBanned:{
        type:Boolean,
        default:false
    }
});
userSchema.index({ email: 1 }, { unique: true });
userSchema.index({ mobile: 1 }, { unique: true });

module.exports = mongoose.model('User',userSchema);