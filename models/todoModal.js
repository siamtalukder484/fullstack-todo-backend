const mongoose = require("mongoose");
const {Schema} = mongoose;

const todoSchema = new Schema({
    fullname:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
        unique: true,
    },
    avater:{
        type: String,
    },
    designation:{
        type: String,
    },
    idnumber:{
        type: Number,
    },
    emailVarified:{
        type: Boolean,
        default: false,
    },
    created:{
        type: Date,
        default: Date.now(),
    },
    updated:{
        type: Date,
    },
})

module.exports = mongoose.model("Todo",todoSchema)