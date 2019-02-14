//Nodejs 服务器
const express = require("express");
const pool = require("./pool");
const cors = require("cors");

var app = express();
app.use(express.static("public"));
app.listen(3000);

app.use(cors({
  origin:["http://127.0.0.1:8080",
         "http://localhost:8080"],//允许列表
  credentials:true   //是否验证
}));

//功能一:首页轮播
app.get("/getImages",(req,res)=>{
  var rows = [
    {id:1,img_url:"http://127.0.0.1:3000/img/home/lunbo/lunbo1.jpg"},
    {id:2,img_url:"http://127.0.0.1:3000/img/home/lunbo/lunbo2.jpg"},
    {id:3,img_url:"http://127.0.0.1:3000/img/home/lunbo/lunbo3.jpg"},
    {id:4,img_url:"http://127.0.0.1:3000/img/home/lunbo/lunbo4.jpg"}
  ];
  res.send(rows);
})