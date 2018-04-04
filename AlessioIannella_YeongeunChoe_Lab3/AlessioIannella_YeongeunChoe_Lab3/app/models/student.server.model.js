const mongoose = require('mongoose');
const crypto = require('crypto');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    studentNumber: {
        type: String,
        unique: true,
        required: 'Student number is required',
        trim: true
    },
    firstName: String,
    lastName: String,
    email: {
        type: String,
        match: [/.+\@.+\..+/, "Please fill a valid email address"]
    },
    address: String,
    city: String,
    postalCode: {
        type: String,
        validate: [
            (postalCode) => postalCode && postalCode.length === 6,
            'Postal code should be 6 characters'
        ]
    },
    phoneNumber: String,
    program: String,
    courses: [
        {
            type: Schema.ObjectId,
            ref: "Course"
        }
    ],
    isAdmin: {
        type: Boolean,
        default: false
    },
    password: {
        type: String,
        required: 'Password is required',
        validate: [
            (password) => password && password.length > 6,
            'Password should be longer'
        ]
    },
    salt: {
        type: String
    },
    provider: {
        type: String,
        required: 'Provider is required'
    },
    providerId: String,
    providerData: {},
    created: {
        type: Date,
        default: Date.now
    }
}, { collection: 'students' });

// Set the 'fullname' virtual property
StudentSchema.virtual('fullName').get(function () {
    return this.firstName + ' ' + this.lastName;
}).set(function (fullName) {
    const splitName = fullName.split(' ');
    this.firstName = splitName[0] || '';
    this.lastName = splitName[1] || '';
});

// Use a pre-save middleware to hash the password
StudentSchema.pre('save', function (next) {
    if (this.password) {
        this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
        this.password = this.hashPassword(this.password);
    }

    next();
});

// Create an instance method for hashing a password
StudentSchema.methods.hashPassword = function (password) {
    //digest parameter required in version 9 of Node.js
    return crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha512').toString('base64');
};

// Create an instance method for authenticating student
StudentSchema.methods.authenticate = function (password) {
    return this.password === this.hashPassword(password);
};

// Configure the 'UserSchema' to use getters and virtuals when transforming to JSON
StudentSchema.set('toJSON', {
    getters: true,
    virtuals: true
});

mongoose.model('students', StudentSchema);