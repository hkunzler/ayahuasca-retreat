const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    price: {
        type: Number,
        required: true
    },
    // title: {
    //     type: String,
    //     required: true
    // },
    // description: String,
    // imgUrl: String,
    admin: {
        type: Schema.Types.ObjectId,
        required: true
    },
    // timeStamp: {
    //     type: Date,
    //     default: Date.now
    // }
})

module.exports = mongoose.model("Post", postSchema)