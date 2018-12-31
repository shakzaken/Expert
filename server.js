const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3500;
const usersRoute = require('./routes/users.routes');
const booksRoute = require('./routes/books.routes');
const categoriesRoute = require('./routes/categories.routes');
const authRoute = require("./routes/auth.routes");
const errorMiddleware = require("./middlewares/error.middleware");
const cors = require('cors');

if(app.get('env') === "development"){
    app.use(cors());
}


app.use(bodyParser.json());


app.use("/users",usersRoute);
app.use("/books",booksRoute);
app.use("/categories",categoriesRoute);
app.use("/auth",authRoute);
app.use(errorMiddleware);

app.get("/",(req,res) =>{
  res.send("<h1>Hi Home</h1>");
});

mongoose.connect("mongodb://127.0.0.1:27017/expertdb",{useNewUrlParser: true, useCreateIndex: true},(err)=>{
  if(err){
    console.log(err);
  }else{
    console.log("connected to MongoDB");
  }
});
app.listen(PORT,() => console.log(`app listen on port ${PORT}`));