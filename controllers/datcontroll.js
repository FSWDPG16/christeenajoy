 const dat = require("../models/dat")
 
 const userDatacreate =async (req, res) => {
    try {
      const { username, age, gender, email } = req.body;
  
      const dane = new dat({ username, age, gender, email });
  
      await dane.save();
      res.json({
        message: `username - ${username}age-${age} gender-${gender} email-${email}`,
      });
    } catch (error) {
      res.json({
        message: "servor error",
        error,
      });
    }
  }

 const getUserData= async (req, res) => {
    try {
      const dayone = await dat.find();
      res.json({
        data: dayone,
      });
    } catch (error) {
      res.json({
        message: `error.message`,
      });
    }
  }
  
   const  updata =async (req, res) => {
    try {
      const { username } = req.body;
      const objectId = req.params.id;
      const updateData = await dat.findByIdAndUpdate(
        objectId,
        {
          username,
        },
        { new: true }
      );
      res.json({
        data: updateData,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

   const  userDatadel = async (req, res) => {
    try {
      const delob = req.params.id;
      console.log("object id:", delob);
      const deldata = await dat.findByIdAndDelete(delob);
      res.json({
        data: deldata,
        message: "data deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  const userProfile= async(req,res)=>{
    try{
      const usepic=req.file
      res.json({
     profile : usepic
      })

    }
    catch(error){
      res.json({
       message :error.message
      })
    }
  }


  module.exports ={ userDatacreate,getUserData,updata,userDatadel,userProfile}