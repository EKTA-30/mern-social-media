const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

//Register user

router.post("/register", async (req, res) => {
  try {
    //create new user from the request body
    const newUser = new User({
      userName: req.body.userName,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 10),
    });

    //save new user and return the response
    const user = await newUser.save();
    res.status(200).send(user);
  } catch (error) {
    //handle any error
    console.log(error);
    res.status(500).send("Internal server error");
  }
});

//Login 
router.post("/login", async (req,res) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        })

        if(!user){
            res.status(404).send({msg:'User not found'});
        }

        //this order should always be followed
       const isPasswordValidated = await bcrypt.compare(req.body.password,user.password);

       if(!isPasswordValidated){
        res.status(403).send({msg:"Invalid credentials"});
       }

       res.status(200).send({
        msg:'Logged in successfully',
        userName: user.userName,
        email: user.email
       })

    } catch (error) {
        console.log(error);
        res.status(500).send({msg:'Internal server error'});
    }
})

module.exports = router;
