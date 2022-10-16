const { promiseError, invalidIdError } = require("../../utils/error.handler");
const { Types } = require("mongoose");

class BookService {
    constructor(bookRepository) {
        this.bookRepository = bookRepository;
    }
    async getAll() {
        try {
            const books = await this.bookRepository.getAll();
            return books;
        }
        catch (error) {
            return promiseError(error);
        }
    }

    async getById(id) {
        try {
            if (Types.ObjectId.isValid(id)) {
                const book = await this.bookRepository.getById(id);
                return book;
            }
            return invalidIdError(id);
        }
        catch (error) {
            return promiseError(error);
        }
    }

    async create(book) {
        try {
            const newBook = await this.bookRepository.create(book);
            return newBook;
        }
        catch (error) {
            return promiseError(error);
        }
    }

    async update(id, book) {
        try {
            if (Types.ObjectId.isValid(id)) {
                const updatedBook = await this.bookRepository.update(id, book);
                return updatedBook;
            }
            return invalidIdError(id);
        }
        catch (error) {
            return promiseError(error);
        }
    }

    async delete(id) {
        try {
            if (Types.ObjectId.isValid(id)) {
                const deletedBook = await this.bookRepository.delete(id);
                return deletedBook;
            }
            return invalidIdError(id);
        }
        catch (error) {
            return promiseError(error);
        }
    }
}

module.exports = {
    BookService
}