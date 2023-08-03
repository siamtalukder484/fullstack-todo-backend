const express = require("express");
const router = express.Router(); 
const {createtodoController,getalltodoController,deletetodoController,updatetodoController} = require("../../controllers/todoController.js")



router.post("/createtodo", createtodoController)
router.get("/getalltodo", getalltodoController)
router.delete("/deletetodo", deletetodoController)
router.put("/updatetodo", updatetodoController)



module.exports = router;