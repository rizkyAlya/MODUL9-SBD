const mongooose = require('mongoose');

const userSchema = new mongooose.Schema ({
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    username: {
        type: String,
        required: [true, 'Username is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
});

const User = mongooose.model('User', userSchema);

module.exports = User;