const express =require("express") ;
const app=express();

app.use(express.urlencoded({extended:true}));
app.use(express.json()) ;

const port =8080;
app.listen(port,()=>{
    console.log(`listning to port ${port}`) ;
})

app.get("/register", (req,res)=>{
    let {username,password}=req.query;
    res.send(` standard get response , welcome ${username} your password is ${password} `)  ;
})

app.post("/register",(req,res)=>{
    // console.log(req.body);
    let {user,password}=req.body ;
     res.send( `standard post response user is ${user} and password is ${password} `) ;
})