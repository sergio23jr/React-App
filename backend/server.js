const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// to hide keys
require('dotenv').config();

// variables needed for express server
const app = express();
const port = process.env.PORT || 3000

// Middleware parce JSON
app.use(cors());
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Connection to mongoose
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://ReactApp:password123@ds261567.mlab.com:61567/heroku_v194ld7s"
)

// Confirm we are connected to DB
const connection = mongoose.connection;
connection.once('open', () => {
    console.log(`MongoDB database connection established successful`);
});

const exercisesRouter = require("./routes/exercises");
const userRouter = require("./routes/users");

app.use("/exercises", exercisesRouter);
app.use("/users", userRouter);

// starts express server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})