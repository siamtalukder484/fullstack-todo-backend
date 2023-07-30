const express = require("express");
const router = express.Router(); 
const {createtodoController,getalltodoController,deletetodoController} = require("../../controllers/todoController.js")



router.post("/createtodo", createtodoController)
router.get("/getalltodo", getalltodoController)
router.delete("/deletetodo", deletetodoController)



module.exports = router;