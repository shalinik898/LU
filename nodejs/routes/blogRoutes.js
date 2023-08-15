const express = require('express');
const router = express.Router();
const Blogs = require('../models/blog');
const blogController = require('../controllers/blogController')


router.get('/blogs' ,blogController.blog_index)

router.post('/blogs',blogController.blog_post)

router.delete('/blogs/:id',blogController.blog_delete)

router.get('/blogs/create',blogController.blog_create_get)

router.get('/blogs/:id',blogController.blog_detail)

module.exports = router