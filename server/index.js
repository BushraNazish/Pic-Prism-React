// 4 steps procedure to make a server :


// Express should be called in this file
const express = require("express");

const dotenv = require("dotenv");

// Binding this env
dotenv.config();

// Express should be called in a variable
const app = express();

// Define a port [ Port is like a DOOR ]
const port = process.env.PORT || 5000;

// Making routes
app.get("/", (req, res) => {
    res.send("<center><h1>Server Running...</h1></center>")
})

// Listen to the Server 
app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
})