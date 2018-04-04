const mongoose = require('mongoose');
const Student = mongoose.model('students');
const Course = mongoose.model('courses');

//
function getErrorMessage(err) {
    if (err.errors) {
        for (let errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].
                message;
        }
    } else {
        return 'Unknown server error';
    }
};

// Save new course in database
exports.create = function (req, res) {
    const course = new Course(req.body);
    course.creator = req.user;
    course.save((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(course);
        }
    });
};

// List all courses
exports.list = function (req, res) {
    Course.find().populate('creator').exec((err, courses) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        }
        else {
            res.status(200).json(courses);
        }
    });
};

// Get course by id
exports.courseByID = function (req, res, next, id) {
    Course.findById(id).populate('creator').exec((err, course) => {
        if (err) return next(err);
        if (!course) return next(new Error('Failed to load course ' + id));
        req.course = course;
        next();
    });
};

// 
exports.read = function (req, res) {
    res.status(200).json(req.course);
};

// Update course
exports.update = function (req, res) {

    const course = req.course;
    course.courseCode = req.body.courseCode;
    course.courseName = req.body.courseName;
    course.section = req.body.section;
    course.semester = req.body.semester;

    course.save((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(course);
        }
    });
};

// Delete course
exports.delete = function (req, res) {
    const course = req.course;
    course.remove((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {

            Student.find().populate('courses').exec((err, students) => {
                if (err) {
                    return res.status(400).send({
                        message: getErrorMessage(err)
                    });
                }
                else {

                    // REMOVE course reference from students

                    var index = student.courses.indexOf(courseID);

                    if (index > -1) {
                    }

                    for (var i = 0; i < students.length; i++) {
                        for (var j = 0; j < students[i].courses.length; j++) {
                            if (students[i].courses[j].id === course.id) {
                                students[i].courses.splice(j, 1);
                            }
                        }
                    }

                    res.status(200);


                }
            });

        }
    });
};

//The hasAuthorization() middleware check if the current student has Admin authorization
exports.hasAuthorization = function (req, res, next) {

    if (!req.user.id == req.course.creator.id) {
        return res.status(403).send({
            message: 'User is not authorized'
        });
    }
    next();
};


