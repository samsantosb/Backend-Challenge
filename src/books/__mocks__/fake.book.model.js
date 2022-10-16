const {
    fakeBooks,
    updatedBook,
} = require('./fake.book.data');

const fakeBookModel = {
    find: () => Promise.resolve(fakeBooks),
    findById: () => Promise.resolve(fakeBooks[0]),
    create: () => Promise.resolve(fakeBooks[0]),
    findByIdAndUpdate: () => Promise.resolve(updatedBook),
    findByIdAndDelete: () => Promise.resolve(fakeBooks[0])
}

module.exports = {
    fakeBookModel
}