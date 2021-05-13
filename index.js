const  express  = require("express");
const mongodb = require('mongodb');
const mongoose = require('mongoose');
require('dotenv').config();
const user = require('./user');


const app = express();

app.use(express.json())
app.use(express.urlencoded());




const PORT = process.env.PORT || 2300;


// connect to the database

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true},(err)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log("Database connected succesfully");
});

const User = mongoose.model('User', user);



app.get("/", (req,res,next)=>{ 
    res.statusCode = 200;
    res.send("Welcome to  CRUD App with Database");
});
app.post("/", (req,res,next)=>{ 
    res.statusCode = 200;
    res.send("Welcome to  CRUD App with Database");
});

app.get('/user',(req,res)=>{

    // get all user in the database
    User.find((err,doc)=>{
        if(err){
            return res.json(err);
        }

        res.status(200).json({message:"Data fetched successfully",data:doc});
    })
});

app.post("/user",(req,res)=>{
    console.log(req.body == null);
    const email = req.body.email;
    const country = req.body.country;
    const name = req.body.name;


    if(!email || !country || !name){
        return res.status(400).send({status:false,message:"name | email | country needed"});
    }

    // create a new user in the database
    User.create({
        name,
        email,
        country
    },(err,doc)=>{
        if(err){
            return res.status().send(err);
        }

        res.status(201).json({message:"Payload successfully create",data:doc});
    })

});





// Friend.create({
//     firstname:"Lolade",
//     lastname:"Akinrolabu",
//     gender:"Male",
//     tite:"Mr",
//     age:26,
//     ismarried:false
// }).then((friend)=>{
//     console.log(friend);
   
// }).catch((err)=>{
//     console.log(err);
// });

// Friend.findById("609c52214b21b408e809ea95",(err,res)=>{
//     if(err) console.log(err)

//     console.log(res)
// })


app.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`);
})
