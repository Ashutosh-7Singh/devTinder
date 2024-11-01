const express = require("express");

const app = express();

app.get("/user", (req, res) => {
    res.send({firstName:"Ashutosh" ,lastName:"Singh"});
});
app.post("/user",(req,res)=>{
    console.log(req.body);
    res.send("Data sucessfully saved to the database")
    
})

app.delete("/user",(req,res)=>{
    res.send("Deleted successfully");
})

app.use("/test",(req,res)=>{
    res.send("Data tested sucessfully");
})

app.listen(7777,()=>{
    console.log("Succesfully running on the 7777 port");
    
})