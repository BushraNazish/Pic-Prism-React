// 4 steps procedure to make a server :


// Express should be called in this file
const express = require("express");
const dotenv = require("dotenv");
const { readdirSync } = require("fs");
const { connectDb } = require("./connection");

// import the route here
// const authRoute = require("./routes/authRoutes");

// Binding this env
dotenv.config();

// Express should be called in a variable
const app = express();

// Define a port [ Port is like a DOOR ]
const port = process.env.PORT || 5000;

connectDb()
// Making routes
app.get("/", (req, res) => {
    res.send("<center><h1>Server Running...</h1></center>")
})

// How to use routes
// app.use("/api", authRoute);

// importing and using routes dynamically
readdirSync("./routes").map((route) => 
    app.use("/api", require(`./routes/${route}`))
);
// console.log(readdirSync("./routes"))

// types of requests :
// 1. GET -> To get the data from the server
// 2. POST -> To post the data to the server
// 3. PUT -> To update the data on the server
// 4. DELETE -> To delete the data from the server

// Listen to the Server 
app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
})