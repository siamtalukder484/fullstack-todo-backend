const express = require("express");
const router = express.Router(); 
const {createtodoController,getalltodoController,deletetodoController,updatetodoController} = require("../../controllers/todoController.js")
const multer = require("multer")


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        let imageextention = file.originalname.split(".")
        let originalextention = imageextention[imageextention.length-1]
        cb(null, file.fieldname + '-' + uniqueSuffix + `.${originalextention}`)
    }
  })
  // const upload = multer({ storage: storage })

  // Set limits for file size
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 200 * 1024, // 200KB in bytes
  },
});


router.post("/createtodo",upload.single('avater'), createtodoController)
router.get("/getalltodo", getalltodoController)
router.delete("/deletetodo", deletetodoController)
router.put("/updatetodo", updatetodoController)



module.exports = router;