

// lecture 11 schema validation



const mongoose = require('mongoose');

main()
    .then(() => {
        console.log("Connection successful");
    })
    .catch((err) => {
        console.log("Connection error:", err);
    });

async function main() {

    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

// old way to write with one constaint

const bookschema = new mongoose.Schema(
    {
        title :String ,
        author : String ,
        price : Number
    }
)
    

// new way to write constarint with more constaint 

const bookschema = new mongoose.Schema(
    {
        title :{
            type:String,
            required:true
        } ,
        author : {
            type:String
        } ,
        price : {
            type: Number
        }
    }
)

// create model
const book = mongoose.model( "book", bookschema ) ;

let book1 = new book(
    {
        title :"mathmatics XII",
        author : "rd sharma",
        price:1200
    }
)

book1.save()
.then( 
    (res)=>{
        console.log(res);
    }
  )
.catch(
    (error)=>{
        console.log(error);
    }
)



                                     //  lecture 12 schema type options 



const mongoose = require('mongoose');

main()
    .then(() => {
        console.log("Connection successful");
    })
    .catch((err) => {
        console.log("Connection error:", err);
    });

async function main() {

    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}


const bookschema = new mongoose.Schema(
    {
        title :{
            type:String,
            required:true,
            maxLength:30
        } ,
        author : {
            type:String
        } ,
        price : {
            type: Number
        } ,
        discount :{
            type:Number,
            default:0
        },
        category :{
            type:String,
            enum:["fiction","non-fiction"] 
        }
    }
)

// create model
const book = mongoose.model( "book", bookschema ) ;

let book1 = new book(
    {
        title :"Gone girl",
        price:999,
        category:"fiction"
    }
)

book1.save()
.then( 
    (res)=>{
        console.log(res);
    }
  )
.catch(
    (error)=>{
        console.log(error);
    }
)



             // lecture 12 schema validation for updating

const mongoose = require('mongoose');

main()
    .then(() => {
        console.log("Connection successful");
    })
    .catch((err) => {
        console.log("Connection error:", err);
    });

async function main() {

    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}




const bookschema = new mongoose.Schema(
    {
        title :{
            type:String,
            required:true,
            maxLength:30
        } ,
        author : {
            type:String
        } ,
        price : {
            type: Number,
            // this will give the error if exceed
            // min :1
            // we can also set the error message
            min:[1," you num is less"]
        } ,
        discount :{
            type:Number,
            default:0
        },
        category :{
            type:String,
            enum:["fiction","non-fiction"] 
        }
    }
)

// create model
const book = mongoose.model( "book", bookschema ) ;

//updating the value but here during updating the rules set in schema does not applied 
book.findByIdAndUpdate( "6b09507598b6a96a90767933", {price:-500 } )
.then( (res)=>{
    console.log(res);
}  )
.catch(
    (error)=>{
        console.log(error);
    }
)

// to apply the rules of schema 
book.findByIdAndUpdate( "6b09507598b6a96a90767933", {price:-500 },{runValidators:true} )
.then( (res)=>{
    console.log(res);
}  )
.catch(
    (err)=>{
        // only we can access to the error
        // console.log(err);
        //we can access the error by this way
        console.log(err.error.price);
    }
)




