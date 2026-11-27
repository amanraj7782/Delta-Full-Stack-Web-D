//                                                  lecture 4 models AND   lecture 5  Insert in Mongoose


// 1. Import the Mongoose library to interact with MongoDB from Node.js
const mongoose = require('mongoose');

// 2. Connect to the local MongoDB database named 'test'
// main() returns a Promise, so we handle success with .then() and errors with .catch()
main()
    .then(() => {
        console.log("Connection successful");
    })
    .catch((err) => {
        console.log("Connection error:", err);
    });

async function main() {
    // Wait until the connection to local MongoDB (port 27017) is established
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

// 3. Define a Schema (the blueprint/structure for documents in the collection)
// Updated to include 'roll' and 'branch' so Mongoose doesn't strip them out
const userSchema = new mongoose.Schema({
    name: String,
    roll: Number,
    branch: String,
    email: String, // Optional: omitted fields are simply left out if not provided
    age: Number
});

// 4. Create a Model (a class used to create and query documents)
// Mongoose automatically converts "User" into the lowercase, plural collection name "users"
const User = mongoose.model("User", userSchema);

// 5. Create a new document instance in memory using the User model
// this insert method insert one data at a time
const user1 = new User({
    name: "aman",
    roll: 2333001,
    branch: "gec"
});

// 6. Save the document to the MongoDB database
// .save() is asynchronous and returns a Promise
user1.save()
    .then((res) => {
        // Logs the saved document along with its auto-generated _id and __v fields
        console.log("Saved document:", res);
    })
    .catch((error) => {
        console.log("Error saving document:", error);
    });



//                                     lecture 6  Insert  MULTIPLES in Mongoose



const mongoose = require('mongoose');


main()
    .then(() => {
        console.log("Connection successful");
    })
    .catch((err) => {
        console.log("Connection error:", err);
    });

async function main() {

    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}


const userSchema = new mongoose.Schema({
    name: String,
    roll: Number,
    branch: String,
    email: String, 
    age: Number
});


const User = mongoose.model("User", userSchema);


User.insertMany( [
    {  name:"bruce baner" , email:"natasa@gmail.com", age:50},
    { name :"tony", email:"ironman@gmail.com",age : 45}
] )
.then( (res)=>{
    console.log(res);
})



//                                     lecture 7  Find in Mongoose


const mongoose = require('mongoose');


main()
    .then(() => {
        console.log("Connection successful");
    })
    .catch((err) => {
        console.log("Connection error:", err);
    });

async function main() {

    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}


const userSchema = new mongoose.Schema({
    name: String,
    roll: Number,
    branch: String,
    email: String, 
    age: Number
});


const User = mongoose.model("User", userSchema);



// // for finding  all

User.find( {age : { $gt : 1} })
.then((res)=>{
    // console.log(res);
    // console.log(res[0]);
    console.log(res);
})
.catch((error)=>{
    console.log(error);
})
;




// for one 

User.findOne( {age : { $gt : 1} })
.then((res)=>{
    // console.log(res);
    // console.log(res[0]);
    console.log(res);
})
.catch((error)=>{
    console.log(error);
})
;




// for finding one using id

User.find( { _id:"6b0860c2034a6cc779d4bc70" })
.then((res)=>{
    // console.log(res);
    // console.log(res[0]);
    console.log(res);
})
.catch((error)=>{
    console.log(error);
})
;



//finding by id
User.findById( "6b0860c2034a6cc779d4bc70")
.then((res)=>{
    // console.log(res);
    // console.log(res[0]);
    console.log(res);
})
.catch((error)=>{
    console.log(error);
})
;




//                                     lecture 8  Find in Mongoose


const mongoose = require('mongoose');


main()
    .then(() => {
        console.log("Connection successful");
    })
    .catch((err) => {
        console.log("Connection error:", err);
    });

async function main() {

    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}


const userSchema = new mongoose.Schema({
    name: String,
    roll: Number,
    branch: String,
    email: String, 
    age: Number
});


const User = mongoose.model("User", userSchema);



//finding by id
User.findById( "6b0860c2034a6cc779d4bc70")
.then((res)=>{
    // console.log(res);
    // console.log(res[0]);
    console.log(res);
})
.catch((error)=>{
    console.log(error);
})
;





//                                     lecture 9  Update


const mongoose = require('mongoose');


main()
    .then(() => {
        console.log("Connection successful");
    })
    .catch((err) => {
        console.log("Connection error:", err);
    });

async function main() {

    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}


const userSchema = new mongoose.Schema({
    name: String,
    roll: Number,
    branch: String,
    email: String, 
    age: Number
});


const User = mongoose.model("User", userSchema);

//update one

User.updateOne( {name:"aman" } , {age:50 } )
.then( ( res)=>{
    console.log(res);
})
.catch( (error)=>{
    console.log(error);
})


User.find({}).then((res)=>{
    console.log(res);
});



//update many



User.updateMany( {age: { $gt:3 } }, {age:90 })
.then( (res)=>{
    console.log(res);
} )
.catch((error)=>{
    console.log(error);
})

User.find({}).then((res)=>{
    console.log(res);
});




//                                     lecture 10  Find and Update


const mongoose = require('mongoose');


main()
    .then(() => {
        console.log("Connection successful");
    })
    .catch((err) => {
        console.log("Connection error:", err);
    });

async function main() {

    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}


const userSchema = new mongoose.Schema({
    name: String,
    roll: Number,
    branch: String,
    email: String, 
    age: Number
});


const User = mongoose.model("User", userSchema);


// it first prints and then update
User.findOneAndUpdate( {age: 90  }, {age:20 })
.then( (res)=>{
    console.log(res);
} )
.catch((error)=>{
    console.log(error);
})



// using the option of update which is new we can print the updated one and update also
User.findOneAndUpdate( {age: 90  }, {age:20 } , {new:true})
.then( (res)=>{
    console.log(res);
} )
.catch((error)=>{
    console.log(error);
})

*/



//                                     lecture 11  Delete in Mongoose



const mongoose = require('mongoose');


main()
    .then(() => {
        console.log("Connection successful");
    })
    .catch((err) => {
        console.log("Connection error:", err);
    });

async function main() {

    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}


const userSchema = new mongoose.Schema({
    name: String,
    roll: Number,
    branch: String,
    email: String, 
    age: Number
});


const User = mongoose.model("User", userSchema);


// delete 

User.deleteOne( {name:"aman" } )
.then( (res)=>{
    console.log(res);
}
 )
.catch( (error)=>{
    console.log(error);
} )

//delete many
User.deleteMany( {name:"aman" } )
.then( (res)=>{
    console.log(res);
}
 )
.catch( (error)=>{
    console.log(error);
} )

//delete by id

User.findByIdAndDelete( {name:"aman" } )
.then( (res)=>{
    console.log(res);
}
 )
.catch( (error)=>{
    console.log(error);
} )





//                                     lecture 12  Schema validation



const mongoose = require('mongoose');


main()
    .then(() => {
        console.log("Connection successful");
    })
    .catch((err) => {
        console.log("Connection error:", err);
    });

async function main() {

    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}


const userSchema = new mongoose.Schema({
    name: String,
    roll: Number,
    branch: String,
    email: String, 
    age: Number
});


const User = mongoose.model("User", userSchema);


// delete 

User.deleteOne( {name:"aman" } )
.then( (res)=>{
    console.log(res);
}
 )
.catch( (error)=>{
    console.log(error);
} )

//delete many
User.deleteMany( {name:"aman" } )
.then( (res)=>{
    console.log(res);
}
 )
.catch( (error)=>{
    console.log(error);
} )

//delete by id

User.findByIdAndDelete( {name:"aman" } )
.then( (res)=>{
    console.log(res);
}
 )
.catch( (error)=>{
    console.log(error);
} )








