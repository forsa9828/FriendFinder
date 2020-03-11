//Require all depen
//var Require = ("require");

//Step 1: Require
//Express 
var express = require('express');
//path
//var path = require("path");

//Step 2:
//Hold the express function 
var app = express();

//Pick a port 
var PORT = process.env.PORT || 3000;
//set up express app
//var app = express();

//Step 3: Specify data format 
//urlencoded for express translate the incoming Request Object as strings or arrays.
app.use(express.urlencoded({extended: true}));
//The incoming data will be displayed in JSON format 
app.use(express.json());




//Step 4: Implement the route files that will be used throught the code 
//require the files from the routing folder
//
require("./app/routing/apiRoutes")(app);
//require("./app/routing/htmlRoutes")(app);

//Step 5: Execute teh server (Listener)
//call express to lisen on port 3000 and run the server 
//once connection was successful, console.log

//app.listen(PORT, function)
//express utilize your function, listen, to run the server on, port 3000;
//after complete the following funciton 

app.listen(PORT, function(){
    console.log("Server has begun on port " + PORT)
})
