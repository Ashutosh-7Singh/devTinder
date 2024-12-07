const express = require("express");
const app = express();
const connectDB = require("./config/database");
const User = require("./models/user");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(express.json());

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");
const userRouter = require("./routes/user");

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);


connectDB()
  .then(() => {
    console.log("Database connection established");
    app.listen(7777, () => {
      console.log("Server is sucessfully listening on port 7777......");
    });
  })
  .catch((err) => {
    console.log("Database cannot be connected");
  });