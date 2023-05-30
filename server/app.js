const express = require('express')
const app  = express();
const data=require("./movies.json")
const port=process.env.PORT||4001;
const cors=require("cors");
app.use(express.json());

app.use(cors());

// Routes
app.get("/movies",(req,res)=>{
  return res.status(200).json({status:200,message:"Data fatched sucessfully",data:data})
})





app.listen(port,()=>console.log("listening on http://localhost:"+port));





