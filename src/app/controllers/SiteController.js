const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose')

class SiteController {
    // [GET] /
    home(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('home', { 
                    courses: multipleMongooseToObject(courses)
                })
            })
            .catch(next)
    }
    // [GET] /search
    // search(req, res) {
    //     res.render('search');
    // }

    search(req, res, next) {
        const searchName = req.query.name;
        Course.find({ name: { $regex: searchName, $options: 'i' } })
            .then(courses => {
                res.render('search', { 
                    courses: multipleMongooseToObject(courses)
                });
            })
            .catch(next);
    }
}

module.exports = new SiteController();