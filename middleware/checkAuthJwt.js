const jwt = require('jsonwebtoken');
const keys = require("../env/keys");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, keys.JWT_SECRET);
    req.userData = decodedToken;
    next();
  } catch(error){
    return res.status(401).json({msg: "Auth Failed"});
  }
}
