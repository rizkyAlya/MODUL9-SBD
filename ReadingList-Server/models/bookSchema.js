const mongooose = require('mongoose');

const bookSchema = new mongooose.Schema ({
    title: {
        type: String,
        required: [true, 'Book Title is required']
    },
    author: {
        type: String,
        required: [true, 'Author is requires']
    },
    synopsis: {
        type: String,
        required: [true, 'Synopsis is required']
    },
});

const Book = mongooose.model('Book', bookSchema);

module.exports = Book;