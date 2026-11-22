const console = require("console");
const express=require("express");
const app=express();
const path=require("path") ;
let port=8080;
app.listen(port,()=>{
    console.log(`server is started on port${port}`);
})


// app.get("/",(req,res)=>{
//     res.render("home.ejs");
// })
// app.use(express.static("public")) ;
app.use(express.static( path.join(__dirname,"/public/css"))) ;
app.use(express.static(path.join(__dirname,"public/javascript")));


app.get("/help",(req,res)=>{
    res.send("this is help page");
})
app.get("/rolldice",(req,res)=>{
    let random=Math.floor(Math.random()*10)+1;
    res.render("roledice.ejs",{random});
})
app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    const datainst=require("./data.json");
    let data=datainst[username] ;
    console.log(data);
    // console.log(datainst);
    res.render("instagram.ejs",{data});

    // let followers=["aman","raj","rohan","ram","mohan"];
    //  let {username}= req.params ;
    //  console.log(username) ;
    // res.render("instagram.ejs",{username,followers});
})

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.use((req,res)=>{
    res.send("url is invaid");
})