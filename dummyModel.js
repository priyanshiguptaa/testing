const mongoose = require ('mongoose');
const dummySchema = mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    title:{
        type:String
    },
    description:{
        type:String
    }
});

module.exports=mongoose.model("dummy",dummySchema);