const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

//update user
router.put("/:id", async (req, res) => {
  try {
    if (req.body.userId === req.params.id) {
      if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      }
    } else {
      return res.status(403).json("Cannot update this account");
    }

    try {
      //this will set everything passed in the body
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });

      await user.save();
      res.status(200).send({ msg: "User updated successfully", user });
    } catch (error) {
      console.log(error);
      res.status(500).send({ msg: "Internal server error" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Internal server error" });
  }
});

//delete user
router.delete("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    if (userId === req.body.userId) {
      try {
        //this will set everything passed in the body
        const user = await User.findByIdAndDelete(userId);
        res.status(200).send({ msg: "User deleted successfully", user });
      } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Internal server error" });
      }
    } else {
      return res.status(403).json({ msg: "You cannot delete this Account" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Internal server error" });
  }
});

//get a user
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).send(other);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Internal server error" });
  }
});

//follow a user
router.put("/:id/follow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
        //this is the user we are trying to follow
      const user = await User.findById(req.params.id);

      //this is the user who is trying to folow some other user
      const currentUser = await User.findById(req.body.userId);

      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });

        await currentUser.updateOne({ $push: { following: req.params.id } });

        res.status(200).json("User has been followed");

      } else {
        res.status(403).json("you already follow this user");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You cannot follow yourself!");
  }
});

//unfollow a user
router.put("/:id/unfollow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
        //this is the user we are trying to unfollow
      const user = await User.findById(req.params.id);

      //this is the user who is trying to unfollow some other user
      const currentUser = await User.findById(req.body.userId);

      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followers: req.body.userId } });

        await currentUser.updateOne({ $pull: { following: req.params.id } });

        res.status(200).json("User has been unfollowed");

      } else {
        res.status(403).json("you do not follow this user");
      }
    } catch (error) {
        console.log(error);
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You cannot follow/unfollow yourself!");
  }
});

module.exports = router;
