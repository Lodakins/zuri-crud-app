const mongoose = require('mongoose');

const {Schema} = mongoose;

const UserSchema = new Schema({
    name:{
        type:String,
        required:[true,"Name is required"],
    },
    email:{type:String,
        required:[true,"Email is required"],
        validate:{
            validator:function(v){
                return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v);
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    country:{
        type:String,
         required:[true,"Country is required"]
    }
});



module.exports = UserSchema;