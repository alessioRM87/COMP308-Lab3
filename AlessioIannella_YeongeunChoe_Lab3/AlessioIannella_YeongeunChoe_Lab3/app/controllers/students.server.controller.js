// Load the module dependencies
const Student = require('mongoose').model('students');
const Course = require('mongoose').model('courses');
const passport = require('passport');

// Create a new error handling controller method
const getErrorMessage = function (err) {
    // Define the error message variable
    let message = '';

    // If an internal MongoDB error occurs get the error message
    if (err.code) {
        switch (err.code) {
            // If a unique index error occurs set the message error
            case 11000:
            case 11001:
                message = 'Student number already exists';
                break;
            // If a general error occurs set the message error
            default:
                message = 'Something went wrong';
        }
    } else {
        // Grab the first error message from a list of possible errors
        for (const errName in err.errors) {
            if (err.errors[errName].message) message = err.errors[errName].message;
        }
    }

    // Return the message error
    return message;
};

// Create a new controller method that signin users
exports.signin = function (req, res, next) {
    passport.authenticate('local', (err, student, info) => {
        if (err || !student) {
            res.status(400).send(info);
        } else {

            // Use the Passport 'login' method to login
            req.login(student, (err) => {
                if (err) {
                    res.status(400).send(err);
                } else {

                    Student.findById(student.id).populate('courses').exec((err, result) => {
                        if (err) {
                            res.status(400).send(err);
                        } else {

                            // Remove sensitive data before login
                            result.password = undefined;
                            result.salt = undefined;

                            res.json(result);
                        }
                    });
                }
            });
        }
    })(req, res, next);
};

// Create a new controller method that creates new 'regular' users
exports.signup = function (req, res) {
    const student = new Student(req.body);
    student.provider = 'local';

    // Try saving the User
    student.save((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
           

            // Login the user
            req.login(student, function (err) {
                if (err) {
                    res.status(400).send(err);
                } else {

                    Student.findById(student.id).populate('courses').exec((err, result) => {
                        if (err) {
                            res.status(400).send(err);
                        } else {
                            
                            // Remove sensitive data before login
                            result.password = undefined;
                            result.salt = undefined;

                            res.json(result);
                        }
                    });
                }
            });
        }
    });
}

// Create a new controller method for signing out
exports.signout = function (req, res) {
    // Use the Passport 'logout' method to logout
    req.logout();

    // Redirect the user back to the main application page
    res.redirect('/');
};

//uses the Passport-initiated req.
//isAuthenticated() method to check whether a user is currently authenticated
exports.requiresLogin = function (req, res, next) {
    if (!req.isAuthenticated()) {
        return res.status(401).send({
            message: 'User is not logged in'
        });
    }
    next();
};

exports.list = function (req, res) {
    Student.find().populate('courses').exec((err, students) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        }
        else {

            for (var i = 0; i < students.length; i++) {
                students[i].password = undefined;
                students[i].salt = undefined;
            }

            res.status(200).json(students);
        }
    })
}

exports.read = function (req, res) {
    res.status(200).json(req.student);
};

exports.studentByID = function (req, res, next, id) {
    Student.findById(id).populate('courses').exec((err, student) => {
        if (err) return next(err);
        if (!student) return next(new Error('Failed to load student ' + id));

        student.password = undefined;
        student.salt = undefined;

        req.student = student;
        next();
    });
}

exports.studentsByCourseID = function (req, res) {

    const id = req.course.id;

    Student.find().populate('courses').exec((err, students) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        }
        else {

            var results = [];

            for (var i = 0; i < students.length; i++) {

                students[i].password = undefined;
                students[i].salt = undefined;

                for (var j = 0; j < students[i].courses.length; j++) {
                    if (students[i].courses[j].id === id) {
                        results.push(students[i]);
                    }
                }
            }

            res.status(200).json(results);
        }
    })
}

exports.addCourse = function (req, res) {
    var courseID = req.body.courseID;
    var studentID = req.body.studentID;

    Student.findById(studentID).populate('courses').exec((err, student) => {

        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        }
        if (!student) {
            return res.status(400).send({
                message: 'Student not found'
            });
        }

        Course.findById(courseID).exec((err, course) => {
            if (err) {
                return res.status(400).send({
                    message: getErrorMessage(err)
                });
            }
            if (!course) {
                return res.status(400).send({
                    message: 'Course not found'
                });
            }

            var alreadyAdded = false;

            for (var i = 0; i < student.courses.length; i++) {
                if (student.courses[i] == courseID) {
                    alreadyAdded = true;
                    break;
                }
            }

            if (alreadyAdded) {
                return res.status(400).send({
                    message: 'Student already registered to the course'
                });
            }

            student.courses.push(courseID);

            Student.findByIdAndUpdate(student._id, student, (err, updatedStudent) => {
                if (err) {
                    return res.status(400).send({
                        message: getErrorMessage(err)
                    });
                } else {

                    Student.findById(updatedStudent._id).populate('courses').exec((err, result) => {
                        if (err) {
                            return res.status(400).send({
                                message: getErrorMessage(err)
                            });
                        }
                        else {
                            result.password = undefined;
                            result.salt = undefined;

                            return res.status(200).json(result);
                        }
                    });
                }
            });
        });
    });
}

exports.dropCourse = function (req, res) {
    var courseID = req.body.courseID;
    var studentID = req.body.studentID;

    Student.findById(studentID).populate('courses').exec((err, student) => {

        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        }
        if (!student) {
            return res.status(400).send({
                message: 'Student not found'
            });
        }

        Course.findById(courseID).exec((err, course) => {
            if (err) {
                return res.status(400).send({
                    message: getErrorMessage(err)
                });
            }
            if (!course) {
                return res.status(400).send({
                    message: 'Course not found'
                });
            }

            var courseAdded = false;

            for (var i = 0; i < student.courses.length; i++) {
                if (student.courses[i] == courseID) {
                    courseAdded = true;
                    break;
                }
            }

            if (!courseAdded) {
                return res.status(400).send({
                    message: 'Student is not registered to the course'
                });
            }

            var index = student.courses.indexOf(courseID);

            if (index > -1) {
                student.courses.splice(index, 1);
            }

            Student.findByIdAndUpdate(student._id, student, (err, updatedStudent) => {
                if (err) {
                    return res.status(400).send({
                        message: getErrorMessage(err)
                    });
                } else {

                    Student.findById(updatedStudent._id).populate('courses').exec((err, result) => {
                        if (err) {
                            return res.status(400).send({
                                message: getErrorMessage(err)
                            });
                        }
                        else {
                            result.password = undefined;
                            result.salt = undefined;

                            return res.status(200).json(result);
                        }
                    });

                    
                }
            })
        });
    });
}

