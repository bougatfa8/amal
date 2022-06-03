const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types


const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    author: {
        type: ObjectId,
        ref: "Users"
    },
    author:{
        type:ObjectId,
        ref:"project"
    },
  
    date:{
        type: String
    }
},{timestamps: true})

mongoose.model('dep', postSchema);