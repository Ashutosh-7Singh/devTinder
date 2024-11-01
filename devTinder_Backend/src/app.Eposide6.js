const express = require("express");
const connectDB = require("./config/database.js");
const app = express();
const User = require("./modals/user.js");

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Moni",
    lastName: "Singh",
    emailId: "moni@gmail.com",
    password: ",moni@1234",
    age: 130,
  });

  try {
    await user.save();
    res.send("User Added Succcessfully !!");
  } catch (err) {
    res.status(400).send("Error savng the user:" + err.send);
  }
});
connectDB()
  .then(() => {
    console.log("Database connection Eatablished");
    app.listen(7777, () => {
      console.log("Server is Successfully runnig on prot 7777");
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected");
  });
