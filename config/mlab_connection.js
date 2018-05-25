const mongoose = require('mongoose');
module.exports = mongoose.connect(process.env.MLAB_DBURI).then( () => console.log("MLAB Conn Success")).catch(err => console.log("DB Err ", err));
