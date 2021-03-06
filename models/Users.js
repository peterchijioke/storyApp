const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
  googleID: {
    type: String,
    required:true
  },
  email:{
    type:String,
    require:true
  },
  firstName:{
    type:String
  },
  lastName:{
   type:String
 },
 image:{
   type:String,
 }

});

mongoose.model('users',userSchema);