var keys = require("../env/keys");
const mongoose = require('mongoose');
module.exports = mongoose.connect(keys.MLAB_DBURI).then( () => console.log("MLAB Conn Success")).catch(err => console.log("DB Err ", err));
