const mongoose = require("mongoose");


const schema= mongoose.Schema(
    {
        name:String,
        price:Number

    },
    {
        collection:"Users",
        timestamps:true
    }
)


const Users=mongoose.model("Users",schema)
module.exports=Users