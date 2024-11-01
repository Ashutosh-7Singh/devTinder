const express = require("express");
const  app= express();


app.use("/test",(req,res)=>{
    res.send("Hai Moni this is test!");
});

app.use("/hello", (req,res)=>{
    res.send("this is Heloo Moni")
})

app.use("/hello/missing", (req,res)=>{
    res.send("Missisng my family")
});

app.use("/",(req,res)=>{
    res.send("Namaste Dev Tinder")
})


app.listen(7777, ()=>{
    console.log("Server is Successfully runnig on prot 7777");
    
});