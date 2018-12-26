const INTERNAL_SERVER_ERROR = 500;


module.exports = function(err,req,res,next){
  console.log(err);
  res.status(INTERNAL_SERVER_ERROR).send("Internal Server Error");

}