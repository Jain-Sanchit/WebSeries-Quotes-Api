const express = require("express");

const router = express.Router();

const Post = require("../models/Post");

//ROUTES

//gets all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

//submit a post
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    author: req.body.author,
  });

  try {
    const postSaved = await post.save();
    res.json(postSaved);
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

//delete

router.delete("/:postId", async (req, res) => {
  try {
    const removePost = await Post.remove({ _id: req.params.postId });
    res.json(removePost);
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

//update
router.patch("/:postId", async (req, res) => {
  try {
    const updatePost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(updatePost);
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

module.exports = router;
