const express = require("express");
const router = express.Router(); 
const {createtodoController,getalltodoController} = require("../../controllers/todoController.js")



router.post("/createtodo", createtodoController)
router.get("/getalltodo", getalltodoController)



module.exports = router;