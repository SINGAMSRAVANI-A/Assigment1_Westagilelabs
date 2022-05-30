const express=require("express");
const PORT=3000;
const app=express();
const Router=require("./routes/router");

app.use("/",Router);

app.listen(PORT,()=>{
console.log("Westagilelabs portal app is Up now");
});