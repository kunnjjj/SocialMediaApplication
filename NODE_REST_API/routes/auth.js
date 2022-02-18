const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//REGISTER
// console.log("user is" ,User);
router.post("/register", async (req, res) => {
  const newUser = await new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.username,
  });

  try {
    // new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = await new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    //saveand return
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (e) {
    console.log(e);
    res.send("err are working now");
  }
});
//LOGIN
router.post("/login",async(req,res)=>{
  try{
    const user = await User.findOne({email:req.body.email});
  !user &&  res.status(404).json("user not found");

  const validPassword = await bcrypt.compare(req.body.password,user.password);
  !validPassword && res.status(400).json("wrong password");
    res.status(200).json(user);
  }
  catch(e){
    // console.log(e);
    res.status(500).json(e);
  }  

});
router.get("/", (req, res) => {
  // console.log("auth route");
  res.send("auth route");
});

module.exports = router;
