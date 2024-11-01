// const express = require("express");
// const app = express();
// //  we can do like this
// app.use("/user", (req, res, next) => {
//   console.log("Handling the route user1!!");
//   //   res.send("Route Handler 1!");
//   next()
//   },(req, res, next) => {
//     console.log("Handling the route user 2 !!");
//     // res.send("Router Hander 2 !!")
//     next();
// },
// (req,res,next)=>{
//     console.log("Handling the route user 3 !!");
//     // res.send("Router Handler 3 !!)
//     next();
// }

// );

// // or we can all in one array also we can put any two in one array

// app.use("/user",
//     [ (req, res, next) => {
//     console.log("Handling the route user1!!");
//     //   res.send("Route Handler 1!");
//     next()
//     },(req, res, next) => {
//       console.log("Handling the route user 2 !!");
//       // res.send("Router Hander 2 !!")
//       next();
//   },
//   (req,res,next)=>{
//       console.log("Handling the route user 3 !!");
//       // res.send("Router Handler 3 !!)
//       next();
//   }
// ]
//   );

// app.listen(7777, () => {
//   console.log("Server is listning on port 777..... ");
// });

// const express = require("express")
// const app= express();
// /*
// app.get("/user",(req,res,next)=>{
//     console.log("Handling route user 1 !!")
//     res.send("Route handler 1");
// })

// app.get("/user",(req,res)=>{
//     console.log("Handling route 2 !!")
//     res.send("RouteHandler 2")
// })*/

// /*
// app.get("/user",(req,res)=>{
//     console.log("Handling route 2 !!")
//     res.send("RouteHandler 2")
// })
// app.get("/user",(req,res,next)=>{
//     console.log("Handling route user 1 !!")
//     // res.send("Route handler 1");
//     next();
// })
// // reponse RouteHandler 2
// */

// app.get("/user",(req,res,next)=>{
//     console.log("Handling route 2 !!")
//     // res.send("RouteHandler 2")
//     next();
// })
// app.get("/user",(req,res,next)=>{
//     console.log("Handling route user 1 !!")
//     // res.send("Route handler 1");
//     next();
// })
// // reponse ->cannot get user in porstman meand error in route

// app.listen(7777,()=>{
//     console.log("Successfullt listnenig on port 7777.........");

// })


// const express = require("express");
// const app = express();

// app.use("/",(req,res,next)=>{
//     res.send("this is route handler 1")
//     next();
// })
// app.listen(7777,()=>{
//     console.log("Successfully listening on port 777..........")
// })



// Middle ware concept 

// const express = require("express");
// const app=express();

// app.get("/admin/getAllData",(req,res)=>{
//     // logic for get all data
//     res.send("Get All DATA")
// })

// app.listen(7777,()=>{
//     console.log("Successfully runnig on srver 7777.............");
    
// })

// proper middler ware for authorization 

 const express = require("express");
 const app=express();

 app.use("/admin",(req,res,next)=>{
    console.log("Admin auth is getting checked ");
    const token = "xyz";
    const isAdminAuthorizedToken = token === "xyz";
    if(!isAdminAuthorizedToken){
      res.status(401).send("Unautorised request");
    
    }else{
      next();
    }
    
 })

 app.get("/admin/getAllData",(req,res)=>{
   res.send("All Data Sent");
 })
 app.get("/admin/deleteUser",(req,res)=>{
   res.send("Deleted User");
 });
 app.listen(7777,()=>{
   console.log("Sucessfullyt running on 7777");
   
 })
