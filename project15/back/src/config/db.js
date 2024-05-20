const mongoose = require('mongoose');
require('dotenv').config()


const url=process.env.MONGODB_URI

mongoose.connect(url).then(() =>{
    console.log('Connected MONGODB!')
  }).catch((err)=>{
    console.log("err" + err)
  })