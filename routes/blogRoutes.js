const express = require("express");

const blogController = require("../controllers/blogController");

const router = express.Router();

// blogs
router.get("/", blogController.blog_index);

// post a new blog
router.post("/", blogController.blog_post);

// create a new blog
router.get("/create", blogController.blog_create);

// get a single blog
router.get("/:id", blogController.blog_details);

// delete a blog
router.delete("/:id", blogController.blog_delete);

module.exports = router;
