var keys = require("../env/keys");
const mongoose = require('mongoose');
module.exports = mongoose.connect(keys.MONGODB_LOCAL_URL).then( () => console.log("MongoDB Conn Success")).catch(err => console.log("DB Err ", err));
