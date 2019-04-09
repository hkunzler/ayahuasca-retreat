const express = require('express')
const postRouter = express.Router()
const Post = require('../models/post')

postRouter.post('/', (req, res, next) => {
    console.log('hjhk');
    console.log(req.body)
    const newPost = new Post(req.body)
    newPost.admin = req.user._id
    newPost.save((err, savedPost) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedPost)
    })
})

module.exports = postRouter