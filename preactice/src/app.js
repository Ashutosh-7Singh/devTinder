const express = require("express");
 
 const app=express();

  app.use("/",(req,res)=>{
    res.send("Hi Moni this is ");
  })

  app.use("/heloo",(req,res)=>{
    res.send("This is Hello Moni ");
  })

  app.listen(8888,()=>{
    console.log("Server is Successfully running on port 8888....");
    
  })
  