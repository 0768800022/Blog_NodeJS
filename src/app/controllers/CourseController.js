const Course = require('../models/Course')
const { multipleMongooseToObject } = require('../../util/mongoose') 


class CourseController {

    // show(req, res, next) {
    //     Course.find({})
    //         .then(courses => res.render('course', {
    //             courses: multipleMongooseToObject(courses)
    //         }))
    //         .catch(next)
    // }
    show(req, res) {
        res.send('COURSE DETAIL')
    }

}

module.exports = new CourseController;