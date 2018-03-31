// Load the module dependencies
const students = require('../../app/controllers/students.server.controller');
const courses = require('../../app/controllers/courses.server.controller');
const passport = require('passport');

// Define the routes module' method
module.exports = function (app) {

    // Set up the 'signup' routes 
    app.route('/api/auth/signup').post(students.signup);

    // Set up the 'signin' routes 
    app.route('/api/auth/signin').post(students.signin);

    // Set up the 'signout' route
    app.route('/api/auth/signout').get(students.signout);

    app.route('/api/students')
        .get(students.list);

    app.route('/api/students/:studentId')
        .get(students.read);
    app.param('studentId', students.studentByID);

    app.route('/api/students/course/:courseId')
        .get(students.studentsByCourseID);
    app.param('courseId', courses.courseByID);

    app.route('/api/students/addCourse')
        .post(students.requiresLogin, students.addCourse);

    app.route('/api/students/dropCourse')
        .post(students.requiresLogin, students.dropCourse);
};