const express = require('express')
const authRouter = express.Router()
const jwt = require('jsonwebtoken')
const Admin = require('../models/admin')

authRouter.post('/signup', (req, res, next) => {
    Admin.findOne({ username: req.body.username.toLowerCase() }, (err, admin) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        if (admin) {
            res.status(400)
            return next(new Error("Username already taken"))
        }
        const newAdmin = new Admin(req.body)

        newAdmin.save((err, savedAdmin) => {
            if (err) {
                console.log(err);
                res.status(500)
                return next(new Error("Username and Password are required"))
            }
            const token = jwt.sign(savedAdmin.withoutPassword(), process.env.SECRET)
            
            return res.status(201).send({ admin: savedAdmin.withoutPassword(), token })
            
        })
    })
})
authRouter.post('/login', (req, res, next) => {
    Admin.findOne({ username: req.body.username.toLowerCase() }, (err, admin) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        if (!admin) {
            res.status(403)
            return next(new Error("Username or password is incorrect"))
        }
        admin.checkPassword(req.body.password, (err, isMatch) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            if (!isMatch) {
                res.status(401)
                return next(new Error("Username or password is incorrect"))
            }
            const token = jwt.sign(admin.withoutPassword(), process.env.SECRET)
            return res.status(200).send({admin: admin.withoutPassword(), token})
        })
    })
})

module.exports = authRouter