// Create a new 'render' controller method
exports.render = function (req, res) {
    // Set the safe user object 
    const student = (!req.student) ? null : {
        _id: req.student.studentNumber,
        firstName: req.student.firstName,
        lastName: req.student.lastName
    };

    // Use the 'response' object to render the 'index' view with a 'title' and 'user' properties
    res.render('index', {
        title: 'LOGIN',
        student: JSON.stringify(student)
    });
};