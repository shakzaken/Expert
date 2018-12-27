const jwt = require('jsonwebtoken');
const {privateKey} = require("../config/config");



module.exports = (req,res,next) => {
  try{
    const token =  req.headers.authorization;
    if(!token){
      throw new Error("Invalid token");
    }
    jwt.verify(token,privateKey);
    next();
  }
  catch(err){
    console.log(err);
    res.status(401).send("Unauthorized");
  }
}