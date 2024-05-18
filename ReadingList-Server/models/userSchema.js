const mongooose = require('mongoose');
const Schema = mongooose.Schema;

const userSchema = new Schema ({
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
    readingList: [{ 
        type: Schema.Types.ObjectId, ref: 'Book' 
    }]
});

const User = mongooose.model('User', userSchema);

module.exports = User;