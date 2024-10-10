const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Course = new Schema({
    // name: {type: String, maxLength: 255},
    // description: {type: String, maxLength: 600},
    // image: {type: String, maxLength: 255},
    // videoId: {type: String, maxLength: 255},
    // level: {type: String, maxLength: 255},
    // slug: {type: String, slug: 'name', unique: true},

    userId: {type: String, maxLength: 255},
    name: {type: String, maxLength: 600},
    date: {date: Date},
    avarageScore: {type: String, maxLength: 255},
    major: {type: String, maxLength: 255},
    slug: {type: String, slug: 'name', unique: true},
}, {
    timestamps: true, //tự tạo thời gian
});

module.exports = mongoose.model('Course', Course);



