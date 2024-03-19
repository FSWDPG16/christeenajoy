const express =require('express');
const router = express.Router();
const multer = require('multer');
const {userDatacreate,getUserData, updata, userDatadel,userProfile} = require("../controllers/datcontroll")

const storage = multer.diskStorage({
  destination :'./public/userProfile',
  filename: function (req,file,cb){
    cb(null,file.originalname +Date.now)
  }
});
const uploading = multer({storage:storage})
const singleUpload = uploading.single('profilepic');

router.post("/eda", userDatacreate);
  
  router.get("/ma", getUserData);
  
  router.put("/edit/:id", updata);
  
  router.delete("/delete/:id", userDatadel);
  
  router.post("/profile",singleUpload,userProfile);
  
  module.exports = router;
  