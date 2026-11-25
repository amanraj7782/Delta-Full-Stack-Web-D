                              //  lecture one to five


// CJS
//import faker
const { faker } = require('@faker-js/faker');
// to use sql in js
const mysql=require("mysql2") ;


// create the connection to database
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  database: 'delta_app',
  password:"86035"
});

// let q="show tables" ;
//insert single
// let q= "INSERT INTO user (id,username, email,password) VALUES (?,?,?,?)";

//insert multipe
let q= "INSERT INTO user (id,username, email,password) VALUES ?";

//insert single
// let user= [ "1234","raj","sliet@gmail.com","86035"] ;

//insert multiple
 let users=[ [ "1234c","rajc","sliet@gmail.comc","86035"] ,
             [ "1234d","rajd","sliet@gmail.comd","86035"] ,
             [ "1234e","raje","sliet@gmail.come","86035"] 
           ] ;



//show tables
try{
         //insert single
         //  connection.query(q,user, (error,result)=>

          //insert multiple
           connection.query(q,[users], (error,result)=>
            {
             if(error){console.log("error",error);}
             console.log("result",result) ;
              //  console.log(result.length);
              // console.log(result[0]) ;
            }
                        ) 
    }
catch(error)
 {
    console.log(error) ;
 }
//close the connection
 connection.end();

// get the random user details from faker
let   getrandomuser= ()=> {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),

  };
}
// print the values
// console.log(getrandomuser()) ;




                                              //lect 6 (insert in bulk)


// CJS
//import faker
const { faker } = require('@faker-js/faker');
// to use sql in js
const mysql=require("mysql2") ;


// create the connection to database
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  database: 'delta_app',
  password:"86035"
});

// let q="show tables" ;
//insert single
// let q= "INSERT INTO user (id,username, email,password) VALUES (?,?,?,?)";

//insert multipe
let q= "INSERT INTO user (id,username, email,password) VALUES ?";

//insert single
// let user= [ "1234","raj","sliet@gmail.com","86035"] ;

//insert multiple
//  let users=[ [ "1234c","rajc","sliet@gmail.comc","86035"] ,
//              [ "1234d","rajd","sliet@gmail.comd","86035"] ,
//              [ "1234e","raje","sliet@gmail.come","86035"] 
//            ] ;


// get the random user details from faker
let   getrandomuser= ()=> {
  return [
     faker.string.uuid(),
     faker.internet.username(),
     faker.internet.email(),
     faker.internet.password(),

  ];
}



 let data=[];

 for(let i=1;i<=100;i++)
   {
      data.push(getrandomuser());
      // console.log(getrandomuser());
   }


// //show tables
try{
           connection.query(q,[data], (error,result)=>
            {
             if(error){console.log("error",error);}
             console.log("result",result) ;
             
            }
                        ) 
    }
catch(error)
 {
    console.log(error) ;
 }


//close the connection
 connection.end();


// print the values
// console.log(getrandomuser()) ;







//                                           LEC7    ROUTING


DB - 100

Routing
REST

GET / -> show no. of user in DB
GET /user -> show users (email, id, username) ejs
PATCH /user/:id -> username edit

~~ADD~~ POST /user -> new user
DELETE /user/:id -> user delete





//                                           LEC8    home route

const express=require("express") ;
const  app= express();

//CONFIGURE FAKER
const { faker } = require('@faker-js/faker');
 
//CONFIGURE SQL
const mysql=require("mysql2") ;


//CONFUGURE CONNECTION
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  database: 'delta_app',
  password:"86035"
});

//WRITE QUERY
let q= "INSERT INTO user (id,username, email,password) VALUES ?";

//GENERATE DATA USING FAKERAND STORE IN ARRAY
let   getrandomuser= ()=> {
  return [
     faker.string.uuid(),
     faker.internet.username(),
     faker.internet.email(),
     faker.internet.password(),

  ];
}

//we have already inserted the data so we don't need to add again so we removed the data




app.get("/",(req,res)=>{
  // res.send(" welcome to home page") ;
  let q= "SELECT COUNT(*) FROM user;" ;
  
     try{
      connection.query(q,(error,result)=>{
        if(error){console.log("error is " ,error);}
        // console.log("result is ",result);
        res.send(result[0]["COUNT(*)"]);
        res.send("sucess") ;
      } )
  }
  catch(error){
    console.log(error);
    res.send("some error has arrived");
  }

})

let port=8080;

app.listen(port,()=>{
  console.log("seriver is listning port 8080");
})




//                                           LEC9    add templete


const express=require("express") ;
const  app= express();

const path=require("path") ;

app.set("view engine","ejs") ;
app.set( "views", path.join(__dirname,"views")) ;

//CONFIGURE FAKER
const { faker } = require('@faker-js/faker');
 
//CONFIGURE SQL
const mysql=require("mysql2") ;


//CONFUGURE CONNECTION
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  database: 'delta_app',
  password:"86035"
});

//WRITE QUERY
let q= "INSERT INTO user (id,username, email,password) VALUES ?";

//GENERATE DATA USING FAKERAND STORE IN ARRAY
let   getrandomuser= ()=> {
  return [
     faker.string.uuid(),
     faker.internet.username(),
     faker.internet.email(),
     faker.internet.password(),

  ];
}

//we have already inserted the data so we don't need to add again so we removed the data




app.get("/",(req,res)=>{
  // res.send(" welcome to home page") ;
  let q= "SELECT COUNT(*) FROM user;" ;
  
     try{
      connection.query(q,(error,result)=>{
        if(error){console.log("error is " ,error);}
        // console.log("result is ",result);
        // res.send(result[0]["COUNT(*)"]);
        // res.send("sucess") ;
        let count=result[0]["COUNT(*)"];
        res.render("home.ejs",{count}) ;
      } )
  }
  catch(error){
    console.log(error);
    res.send("some error has arrived");
  }

})

let port=8080;

app.listen(port,()=>{
  console.log("seriver is listning port 8080");
})



          //                                                    10 show route 



//configure express
const express=require("express") ;
const  app= express();

const methodoveride= require("method-override") ;
app.use(express.urlencoded({extended:true})) ;

app.use( methodoveride("_method")) ;

//configure path so that no need to use slace
const path=require("path") ;

////setup ejs 
app.set("view engine","ejs") ;
app.set( "views", path.join(__dirname,"views")) ;

//CONFIGURE FAKER
const { faker } = require('@faker-js/faker');
 
//CONFIGURE SQL
const mysql=require("mysql2") ;


//CONFUGURE CONNECTION
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  database: 'delta_app',
  password:"86035"
});

//WRITE QUERY
let q= "INSERT INTO user (id,username, email,password) VALUES ?";

//GENERATE DATA USING FAKERAND STORE IN ARRAY
let   getrandomuser= ()=> {
  return [
     faker.string.uuid(),
     faker.internet.username(),
     faker.internet.email(),
     faker.internet.password(),

  ];
}

//we have already inserted the data so we don't need to add again so we removed the data



// home rout
app.get("/",(req,res)=>{
  // res.send(" welcome to home page") ;
  let q= "SELECT COUNT(*) FROM user;" ;
  
     try{
      connection.query(q,(error,result)=>{
        if(error){console.log("error is " ,error);}
        // console.log("result is ",result);
        // res.send(result[0]["COUNT(*)"]);
        // res.send("sucess") ;
        let count=result[0]["COUNT(*)"];
        res.render("home.ejs",{count}) ;
      } )
  }
  catch(error){
    console.log(error);
    res.send("some error has arrived");
  }

})

//show route
app.get("/user",(req,res)=>{
  let q= "select * from user;" ;

       try{
      connection.query(q,(error,users)=>{
        if(error){console.log("error is " ,error);}
          res.render("showusers.ejs",{users});
      } )
  }
  catch(error){
    console.log(error);
    res.send("some error has arrived");
  }

})

//edit route
app.get("/user/:id/edit",(req,res)=>{
  let {id} = req.params ;
  let q = `select * from user where id= '${id}' `;

        try{
      connection.query(q,(error,result)=>{
              if(error){console.log("error is " ,error);}
              // console.log(result) ;
              let user=result[0];
              res.render("edit.ejs",{user});
           } )
            }
     catch(error){
               console.log(error);
               res.send("some error has arrived");
                 }
})

//UPDATE ROUTE
app.patch("user/:id",(req,res)=>{
    res.send("updated") ;
} )



let port=8080;

app.listen(port,()=>{
  console.log("seriver is listning port 8080");
})




                  //  lecture 12 :  update route 

//configure express
const express=require("express") ;
const  app= express();

//for using patch and delete we need to use the overide function
const methodoveride= require("method-override") ;

//to get understand the url sent data
app.use(express.urlencoded({extended:true})) ;

//configure the method overide to use to parse the function of delete and patch
app.use( methodoveride("_method")) ;

//configure path so that no need to use slace
const path=require("path") ;

////setup ejs 
app.set("view engine","ejs") ;
app.set( "views", path.join(__dirname,"views")) ;

//CONFIGURE FAKER
const { faker } = require('@faker-js/faker');
 
//CONFIGURE SQL
const mysql=require("mysql2") ;


//CONFUGURE CONNECTION
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  database: 'delta_app',
  password:"86035"
});

//WRITE QUERY
let q= "INSERT INTO user (id,username, email,password) VALUES ?";

//GENERATE DATA USING FAKERAND STORE IN ARRAY
let   getrandomuser= ()=> {
  return [
     faker.string.uuid(),
     faker.internet.username(),
     faker.internet.email(),
     faker.internet.password(),

  ];
}

//we have already inserted the data so we don't need to add again so we removed the data



// home rout
app.get("/",(req,res)=>{
  let q= "SELECT COUNT(*) FROM user;" ;
  
     try{
      connection.query(q,(error,result)=>{
        if(error){console.log("error is " ,error);}
        let count=result[0]["COUNT(*)"];
        res.render("home.ejs",{count}) ;
      } )
  }
  catch(error){
    console.log(error);
    res.send("some error has arrived");
  }

})

//show route
app.get("/user",(req,res)=>{
  let q= "select * from user;" ;

       try{
      connection.query(q,(error,users)=>{
        if(error){console.log("error is " ,error);}
          res.render("showusers.ejs",{users});
      } )
  }
  catch(error){
    console.log(error);
    res.send("some error has arrived");
  }

})

//edit route
app.get("/user/:id/edit",(req,res)=>{
  let {id} = req.params ;
  let q = `select * from user where id= '${id}' `;

        try{
      connection.query(q,(error,result)=>{
              if(error){console.log("error is " ,error);}
              let user=result[0];
              res.render("edit.ejs",{user});
           } )
            }
     catch(error){
               console.log(error);
               res.send("some error has arrived");
                 }
})

//UPDATE ROUTE
app.patch("/user/:id",(req,res)=>{
      let {id} = req.params ;
      let { password:formpass,username:newusern}= req.body ;
  let q = `select * from user where id= '${id}' `;
        try{
      connection.query(q,(error,result)=>{
              if(error){console.log("error is " ,error);}
              let user=result[0];
              if(formpass !=user.password)
              {
                res.send("wrong password") ;
              }
              else
                {
                    // res.send(user) ;
                   let q2=`UPDATE user SET username="${newusern}" WHERE id="${id}" `;

                   connection.query(q2,(error,result)=>{
                   if(error){console.log("error is " ,error);}
                    // res.send(result) ;
                    res.redirect("/user")
                                                      } )
                } 
            })
          }
     catch(error){
               console.log(error);
               res.send("some error has arrived");
                 }
 }
 )



let port=8080;

app.listen(port,()=>{
  console.log("seriver is listning port 8080");
})

