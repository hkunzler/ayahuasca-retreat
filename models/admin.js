const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const adminSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
})

adminSchema.methods.checkPassword = function (passwordAttempt, callback) {
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if (err) {
            return callback(err)
        }
        callback(null, isMatch)
    })
}

adminSchema.pre('save', function (next) {
    const admin = this
    if (!admin.isModified('password')) {
        return next()
    }
    bcrypt.hash(admin.password, 10, (err, hash) => {
        if (err){ 
            return next(err)
        }
        admin.password = hash
        next()
    })
})

adminSchema.methods.withoutPassword = function () {
    const admin = this.toObject()
    delete admin.password
    return admin
}
module.exports = mongoose.model('Admin', adminSchema)