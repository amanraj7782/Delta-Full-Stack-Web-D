const express=require("express") ;
const app=express();

// console.dir(app);
let port=8080;
app.listen(port,()=>{
console.log(`app server is started with ${port}`);
});

app.get("/",(req,res)=>{
         res.send("HOME bacho , hllo the response is sent sucessfully ") ;
})
// app.get("/:usernanme/:id",(req,res)=>{
//      console.log(req.params);
//      res.send("this is home page with params");

// })

app.get("/:username/:id",(req,res)=>{
         let {username,id}=req.params;
         res.send(`welcome ! the username is ${username} and id is ${id}`);
})

app.get("/contact",(req,res)=>{
        res.send("CONTACT , you have contacted the contact page") ;
})

app.get("/apple",(req,res)=>{
    res.send("apple , you have contacted apple page");
})


app.post("/",(req,res)=>{
   res.send("you have given a post req");
})

app.get("/search",(req,res)=>{
   console.log(req.query);
   res.send("sucessfull");
})

app.get("/if",(req,res)=>{
   let {q}=req.query;
   res.send(`sucess${q}`);
})

app.use((req,res)=>{
   res.status(404).send("this address does not exist");
})


// app.use((req,res)=>{
//    console.log("request is received") ;
// //    res.send({
// //        name:"aman",
// //        color:"red"
// //    }) ;
//      res.send("<h1>hello ji!</h1><p>kaya hal hai aapke</p>")
// })