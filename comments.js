// Create web server

// Import modules
const express = require('express')
const router = express.Router()

// Import middleware
const auth = require('../middleware/auth')

// Import models
const Comment = require('../models/Comment')
const Post = require('../models/Post')

// @route   POST /api/comments
// @desc    Create a comment
// @access  Private
router.post('/', auth, async (req, res) => {
  try {
    // Get post
    const post = await Post.findById(req.body.postId)

    // Create comment
    const comment = new Comment({
      text: req.body.text,