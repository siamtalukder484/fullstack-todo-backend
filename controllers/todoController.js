const express = require("express");
const router = express.Router(); 
const Todo = require("../models/todoModal.js")
const emailValidation = require("../helpers/emailValidation.js")




let createtodoController = async (req, res) => {
    const {fullname,email,department,blood,avater,designation,idnumber} = req.body

    console.log(req.file,filename);

    if(!fullname){
        return res.send({error: "Please Enter your name!"})
    }
    else if(!email){
        return res.send({error: "Please Enter your email!"})
    }
    else if(!emailValidation(email)){
        return res.send({error: "Enter a valid Eamil"})
    }
    else if(department == null){
        return res.send({error: "Please select a department.."})
    }
    else{
        let duplicateEmail = await Todo.find({email: email})
        if(duplicateEmail.length > 0){
            return res.send({error: "Email already existed. "})
        }
        const todo = new Todo({
            fullname,
            email,
            department,
            blood,
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

let deletetodoController =  async (req, res) => {
    const id = req.headers.id;
    try{
        const result = await Todo.deleteOne({ _id: id });
        if (result.deletedCount === 1) {
          res.json({ message: 'Data deleted successfully' });
        } else {
          res.status(404).json({ message: 'Data not found' });
        }
    }catch(error) {
        res.status(500).json({ message: 'Error deleting data', error: error.message });
    }
}

let updatetodoController =  async (req, res) => {

    const id = req.headers.id
    const {fullname,email,department,designation,idnumber,blood} = req.body
    let updateTodo = await Todo.findOneAndUpdate (
        {_id:id},
        {$set:{
            fullname: fullname,
            email: email,
            department: department,
            designation: designation,
            idnumber: idnumber,
            blood: blood,
        }},
        {new: true}
    )
    return res.send({success: "Todo Update Successfully"})
    
}



module.exports = {createtodoController,getalltodoController,deletetodoController,updatetodoController}