const mongoose = require('mongoose');

function dbConnection(){
    mongoose.connect(process.env.DATABASE_URL).then(()=>{
        console.log("Database Connected");
    }).catch((err)=>{
        console.log(err);
        
    })

}

module.exports = dbConnection;