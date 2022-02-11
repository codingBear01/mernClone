//set express framework
const express = require("express");
const app = express();
//import npm libraries
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config(); //you should write this for using dotenv. you can write anything in .env file to keep secret

mongoose.connect(process.env.MONGO_URL, () => {
  //connect to MongoDB,
  /*The process.env property returns an object containing the user environment.*/
  console.log("connected to mongoDB!"); //if connected successfully this msg is indicated
});

//after created app and connection to mongoDB you can write middlewares
//middleware
app.use(express.json());
/*(property) Application<Record<string, any>>.use: (...handlers: RequestHandler<ParamsDictionary, any, any, qs.ParsedQs, Record<string, any>>[]) => Express (+8 overloads)*/
/*var e.json: (options?: bodyParser.OptionsJson) => createServer.NextHandleFunction
Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option. */
app.listen(8800, () => {
  console.log("backend is running!");
});
