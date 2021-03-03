const { json } = require("body-parser");
const express = require("express");
const router = express.Router();

//importing post schema from models folder
const Post = require("../models/Post");

//gets all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//handling post requests
router.post("/", async (req, res) => {
  console.log(req.body);
  //new post made from the Post.js schema in models folder, values efined as req.body.whatever
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
  });
  //save post
  try {
    const savedPost = await post.save();
    //jsonify response
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/githubwebhook", async (req, res) => {
  console.log(req.body);
  const request = req.body;

  const sendMsg = await fetch("https://md5-blog-api.herokuapp.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "from github",
      content: "test",
      image: "req.body.image,",
    }),
  });

  res.json({ request });
});

//gets specific post by postId
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
