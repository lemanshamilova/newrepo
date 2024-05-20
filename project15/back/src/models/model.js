const mongoose = require('mongoose');

const schema=mongoose.Schema(
    {
        image:String,
        title:String,
        description:String
    },
    {
        collection:"Elements",
        timestamps:true
    }
)
const Products=mongoose.model("Products",schema)
module.exports=Products