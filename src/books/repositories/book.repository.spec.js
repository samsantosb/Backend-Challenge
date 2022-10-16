const { fakeBookModel } = require('../__mocks__/fake.book.model');
const { fakeId, fakeId2, updatedBook, fakeBooks } = require('../__mocks__/fake.book.data');
const { BookRepository } = require('./book.repository');
const { default: JestHasteMap } = require('jest-haste-map');
const { describe, it, before, after } = global;

const bookRepository = new BookRepository(fakeBookModel);

describe("BookRepository", () => {
    describe("getAll", () => {
        it("should return all books", async () => {
            const books = await bookRepository.getAll();
            expect(books).toEqual(fakeBooks);
        });
        it("should return an empty array, if theres is no books in the database", async () => {
            jest.spyOn(fakeBookModel, 'find').mockReturnValueOnce(Promise.resolve([]));
            const books = await bookRepository.getAll();
            expect(books).toEqual([]);
        })
        it("should bookModel.find method", async () => {
            const spy = jest.spyOn(fakeBookModel, 'find');
            await bookRepository.getAll();
            expect(spy).toHaveBeenCalled();
        })
    })
    describe("getById", () => {
        it("should return a book", async () => {
            const book = await bookRepository.getById(fakeId);
            expect(book).toEqual(fakeBooks[0]);
        });
        it("should return an empty object, if theres is no book in the database", async () => {
            jest.spyOn(fakeBookModel, 'findById').mockReturnValueOnce(Promise.resolve(null));
            const book = await bookRepository.getById(fakeId);
            expect(book).toEqual({});
        })
        it("should carrModel.findById method", async () => {
            const spy = jest.spyOn(fakeBookModel, 'findById');
            await bookRepository.getById(fakeId);
            expect(spy).toHaveBeenCalled();
        })
    })
    describe("create", () => {
        it("should create a book", async () => {
            const book = await bookRepository.create(fakeBooks[0]);
            expect(book).toEqual(fakeBooks[0]);
        });
        it("should carrModel.create method", async () => {
            const spy = jest.spyOn(fakeBookModel, 'create');
            await bookRepository.create(fakeBooks[0]);
            expect(spy).toHaveBeenCalled();
        })
    })
    describe("update", () => {
        it("should update a book", async () => {
            const book = await bookRepository.update(fakeId, updatedBook);
            expect(book).toEqual(updatedBook);
        });
        it("should return an empty object, if theres is no book in the database", async () => {
            jest.spyOn(fakeBookModel, 'findByIdAndUpdate').mockReturnValueOnce(Promise.resolve(null));
            const book = await bookRepository.update(fakeId, updatedBook);
            expect(book).toEqual({});
        })
        it("should carrModel.findByIdAndUpdate method", async () => {
            const spy = jest.spyOn(fakeBookModel, 'findByIdAndUpdate');
            await bookRepository.update(fakeId, updatedBook);
            expect(spy).toHaveBeenCalled();
        })
    })
    describe("delete", () => {
        it("should delete a book", async () => {
            const book = await bookRepository.delete(fakeId);
            expect(book).toEqual(fakeBooks[0]);
        });
        it("should return an empty object, if theres is no book in the database", async () => {
            jest.spyOn(fakeBookModel, 'findByIdAndDelete').mockReturnValueOnce(Promise.resolve(null));
            const book = await bookRepository.delete(fakeId);
            expect(book).toEqual({});
        })
        it("should carrModel.findByIdAndDelete method", async () => {
            const spy = jest.spyOn(fakeBookModel, 'findByIdAndDelete');
            await bookRepository.delete(fakeId);
            expect(spy).toHaveBeenCalled();
        })
    })
});