const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types

const userSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    time_estimate: {
        type: String,
        required: true
    },
    start_date: {
        type: String,
        required: true
    },
    end_date: {
        type: String,
        required: true
    },
    athor:{
        type:ObjectId,
        href:"user"
    },
   



 
},
{timestamp :true}
)

mongoose.model('project', userSchema);