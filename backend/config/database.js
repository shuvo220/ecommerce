const mongoose = require('mongoose');


const connectDatabase=()=>{
    mongoose.connect(process.env.DB_URI).then(()=>{
           console.log('database connected');
       }).catch((error)=>{
           console.log('database not connected');
       })
}

module.exports = connectDatabase;