const express = require("express");

const app = express();

//dynamic routing
app.get("/user/:userId/:name/:password", (req, res)=>{ 
// console.log(req.query, 'req22')
console.log(req.params)
res.send(`UserId : ${req.params.userId} Name : ${req.params.name} Password : ${req.params.password}`)
})

// Query 
app.get("/satya",(req,res)=>{
res.send(`id : ${req.query.id}, color: ${req.query.color}`)
})

// Params
app.get("/ansh/:userId/:designation/:city",(req,res)=>{
res.send(`userId:${req?.params.userId} designation:${req.params.designation} city:${req.params.city}`)
})

app.get('/golu/:userId',(req,res)=>{
res.send(`UserId : ${req.params.userId} Hobby: ${req.query.hobby} City: ${req.query.city}`)
})

app.post("/user", (req, res)=>{        
res.send("Data Successfully saved to dbatabase")
})

app.delete("/user", (req, res)=>{
res.send("Deleted Successfully")
})



app.listen(7777, () => {
  console.log("server is successfully listening on port 7777");
});
