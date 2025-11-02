const express = require("express");

const app = express();


// //dynamic routing
// app.get("/user/:userId/:name/:password", (req, res)=>{
// // console.log(req.query, 'req22')
// console.log(req.params)
// res.send(`UserId : ${req.params.userId} Name : ${req.params.name} Password : ${req.params.password}`)
// })

// // Query
// app.get("/satya",(req,res)=>{
// res.send(`id : ${req.query.id}, color: ${req.query.color}`)
// })

// // Params
// app.get("/ansh/:userId/:designation/:city",(req,res)=>{
// res.send(`userId:${req?.params.userId} designation:${req.params.designation} city:${req.params.city}`)
// })

// app.get('/golu/:userId',(req,res)=>{
// res.send(`UserId : ${req.params.userId} Hobby: ${req.query.hobby} City: ${req.query.city}`)
// })

// app.post("/user", (req, res)=>{
// res.send("Data Successfully saved to dbatabase")
// })

// app.delete("/user", (req, res)=>{
// res.send("Deleted Successfully")
// })

// app.use("/user",
//   (req, res, next) => {
//     console.log("res 1");
//     // res.send("I am Res1 ");
//     next()
//   },
//   (req, res, next) => {
//     console.log("res 2");
//     // res.send("I am Res1 ");
//     next()
//   },
//    (req, res, next) => {
//     console.log("res 3");
//     res.send("I am Res3 ");
//   }
// );

const {adminAuth, userAuth} = require('./middlewares/auth')


app.use("/admin", adminAuth);

app.get("/admin/getAdminData", (req, res) => {
  console.log("getAdmin")
  res.send("get Admin Data");
});

app.post("user/data", (req, res)=>{
res.send("User data send")
})

app.get("/user",userAuth, (req, res)=>{
res.send("get User Data")
})

app.delete("/admin/deleteAdmin", (req, res) => {
  res.send("Delete Admin Data");
});

app.listen(7777, () => {
  console.log("server is successfully listening on port 7777");
});
