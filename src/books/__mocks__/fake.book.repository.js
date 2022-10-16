const { fakeBooks, updatedBook } = require('./fake.book.data');

const fakeBookRepository = {
    getAll: () => Promise.resolve(fakeBooks),
    getById: () => Promise.resolve(fakeBooks[0]),
    create: () => Promise.resolve(fakeBooks[0]),
    update: () => Promise.resolve(updatedBook),
    delete: () => Promise.resolve(fakeBooks[0])
}

module.exports = {
    fakeBookRepository
}