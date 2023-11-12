const express = require('express');
const cors = require('cors');
const userRouter = require('../router/userRouter');
const {connect} = require('../db/db');
const { runInThisContext } = require('vm');

const app = express();

// use middleware to form our contracts for incoming json payloads only
app.use(express.json());
// use middleware for url encoding
app.use(express.urlencoded({ extended: true }));

// use middleware to handle cors policy
app.use(cors());
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Content-Type, Accept, Authorization, Origin, X-Requested-With");

//     if (req.method === "OPTIONS") {
//         req.header("Access-Control-Allow-Methods", "POST, PUT, DELETE, PATCH, GET");
//     }
//     next(); // go to the next middleware
// });

// health point actuator
// http://localhost:3001
app.get("/", (req, res, next) => {
    res.status(200).json({message: "Service is up"});
});

// routers

app.use("/users", userRouter)

// bad url or error we can handle
// with middleware
app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error:{
            message: error.message,
            status: error.status,
        },
    });
    
});

// db connection
connect();

module.exports = app;
