const mongoose =require("mongoose");
const Schema =mongoose.Schema;
// require('mongoose-type-url');

const learnSchema = new Schema({
    title: String,
    url:String,
    description:String
        
})

const Learnsch=mongoose.model("learnsch",learnSchema);

module.exports=Learnsch;