const express = require("express");
const router = express.Router(); 
const {createtodoController,getalltodoController,deletetodoController,updatetodoController} = require("../../controllers/todoController.js")
const multer = require("multer")


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  const upload = multer({ storage: storage })


router.post("/createtodo",upload.single('avater'), createtodoController)
router.get("/getalltodo", getalltodoController)
router.delete("/deletetodo", deletetodoController)
router.put("/updatetodo", updatetodoController)



module.exports = router;