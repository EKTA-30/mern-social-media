const router = require("express").Router();
const Post = require("../models/post");
const User = require('../models/user')

//create a post
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);

  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json({ msg: "Error" });
  }
});

//update a post
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({
        $set: req.body,
      });
      res.status(200).send({ msg: "The post has been updated" });
    } else {
      res.status(500).json({ msg: "You can update onlny your own post" });
    }
  } catch (error) {
    console.log(error);
  }
});

//delete a post
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(200).send({ msg: "The post has been deleted" });
    } else {
      res.status(500).json({ msg: "You can delete only your own post" });
    }
  } catch (error) {
    console.log(error);
  }
});

//like/dislike a post
router.put("/:id/like", async (req,res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push:{likes:req.body.userId}});
            res.status(200).send({msg:"The post has been liked"});
        }
        else{
            await post.updateOne({$pull:{likes:req.body.userId}});
            res.status(200).send({msg:"The post has been disliked"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({msg:"Internal server error"});
    }
    
})

//get a post
router.get("/:id", async (req,res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).send(post);
    } catch (error) {
        console.log(error);
        res.status(500).send({msg:"Internal server error"});
    }
})

//get timeline posts
router.get("/timeline/:userId", async (req,res) => {
    try {
      console.log('error here',req.params.userId);
        const currentUser = await User.findById(req.params.userId);
        console.log(currentUser,'current');
        const userPosts = await Post.find({
            userId:currentUser._id
        })
        // currentUser.following returns an array with the userId of all the users that the current user follows
        //we then iterate over that array and find posts with the corresponding id to render on the home page of the current user
        console.log(userPosts);
        const friendPosts = await Promise.all(
            currentUser.following.map((friendId) => {
               return Post.find({userId:friendId})
            })
        );
        res.status(200).json(userPosts.concat(...friendPosts));

    } catch (error) {
        console.log(error);
        res.status(500).send({msg:"Internal server error"});
    }
})

module.exports = router;
