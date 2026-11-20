// format for using express
const express=require("express") ;
const app = express();
//to understand the send data
app.use(express.urlencoded({extended:true}) );
//to connect to the port
const port =8080 ;
// to insialise path so that no need to use /..
const path=require("path") ;
// used to use css files
app.use( express.static(path.join(__dirname,"public"))) ;
//import unique id 
const { v4: uuidv4 } = require('uuid');
// uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
//to use form as the fuction to do delete and patch
const methodoverride =require("method-override");
app.use(methodoverride("_method"));

// general post
let posts =[ 
       {  
        id:uuidv4(), // ⇨ 'b18794e8-5d0d-417c-b361-ba38e78411b4',
        username: "Aman",
        content:"i am a coder"
       },
        {  
        id:uuidv4(), // ⇨ 'b18794e8-5d0d-417c-b361-ba38e78411b4',
        username: "Rohan",
        content:"i am a Gamer"
       },
        {  
        id:uuidv4(), // ⇨ 'b18794e8-5d0d-417c-b361-ba38e78411b4',
        username: "Lucky",
        content:"i am a Student"
       }

] ;
//when this url came then to show index.ejs
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts}) ;
})
//when new url came then use this
app.get("/posts/new",(req,res)=>{
     res.render("new.ejs") ;
}) ;


//handle the request comming
app.post("/posts",(req,res)=>{
//    console.log(req.body) ;
//copy username and content from the url
let {username,content} = req.body ;
//get the unique id
let id=uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
//add to the queue
   posts.push({id,username,content});
//    res.send("post req working") ;
// when then post is send then oprm the post page
      res.redirect("/posts") ;
}) ;

// go to the id
app.get("/posts/:id",(req,res)=>{
    //in get used to extract data
     let {id} =req.params ;
    //find the post with the id
     let post=posts.find( (p)=>  id=== p.id )
    //show the post through ejs
     res.render("show.ejs",{post});
    //  console.log(post);
    //  console.log(id) ;
    //  res.send(" req working " ) ;
})

//to update the post with
app.patch( "/posts/:id",( req,res)=>{
    //get the id
    let {id}=req.params;
    //get the updated content
    let newcontent= req.body.content;
    console.log(newcontent);
    //find the post with the id
    let post = posts.find((p)=> p.id===id )
    //post the content with the id
    post.content=newcontent;
    // console.log("id");
    // console.log(post);
    // res.send(" patch req working" );
    res.redirect("/posts") ;
})
//to delete the post
app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
    posts=posts.filter((p)=> p.id !==id)
    // res.send("delete sucess") ;
    res.redirect("/posts");
})
//to edit the post
app.get("/posts/:id/edit",(req,res)=>{
  let {id}=req.params ;
  let post=posts.find((p)=> p.id===id)
  res.render("edit.ejs",{post,id});
})



//setup ejs
app.set("view engine", "ejs") ;
app.set("views",path.join(__dirname , "views") );
//setup port
app.listen(port,()=>{
    console.log("listing to the port 8080");
});