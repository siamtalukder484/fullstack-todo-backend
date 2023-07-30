const express = require("express");
const router = express.Router(); 
const Todo = require("../models/todoModal.js")
const emailValidation = require("../helpers/emailValidation.js")

let createtodoController = async (req, res) => {
    const {fullname,email, avater,designation,idnumber} = req.body
    if(!fullname){
        return res.send({error: "Please Enter your name!"})
    }
    else if(!email){
        return res.send({error: "Please Enter your email!"})
    }
    else if(!emailValidation(email)){
        return res.send({error: "Enter a valid Eamil"})
    }
    else{
        let duplicateEmail = await Todo.find({email: email})
        if(duplicateEmail.length > 0){
            return res.send({error: "Email already existed. "})
        }
        const todo = new Todo({
            fullname,
            email,
            avater,
            designation,
            idnumber
        });
        todo.save()
        res.send({
            success: "Registration Successfully.",
            fullname: todo.fullname,
            email: todo.email,
        })
    }
}

let getalltodoController = async (req, res) => {
    const data = await Todo.find({})
    res.send(data)
}



module.exports = {createtodoController,getalltodoController}