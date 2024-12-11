const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/devTinder");
    // console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;



// const mongoose = require("mongoose");

// const connectDB = async () => {
//   await mongoose.connect(
//     "mongodb+srv://namasteDev:bxbR19qc9HHcuCy6@namastenode.shhjx.mongodb.net/empm"
//   );
// };

// module.exports= connectDB;
