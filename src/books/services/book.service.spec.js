const { fakeBookRepository } = require('../__mocks__/fake.book.repository');
const { fakeId, updatedBook, fakeBooks } = require('../__mocks__/fake.book.data');
const { BookService } = require('./book.service');
const { describe, it, before, after } = global;

const bookService = new BookService(fakeBookRepository);

describe("book Service", () => {
    describe("getAll", () => {
        it("should return all books", async () => {
            const books = await bookService.getAll();
            expect(books).toEqual(fakeBooks);
        });
        it("should return an empty array if there is no books", async () => {
            jest.spyOn(fakeBookRepository, "getAll").mockResolvedValueOnce([]);
            const books = await bookService.getAll();
            expect(books).toEqual([]);
        });
        it("should call BookRepository.getAll method", () => {
            jest.spyOn(fakeBookRepository, "getAll");
            bookService.getAll();
            expect(fakeBookRepository.getAll).toHaveBeenCalled();
        });
        it("should send the correct message if a promise Error Occurs", async () => {
            jest.spyOn(fakeBookRepository, "getAll").mockRejectedValueOnce("Error");
            const books = await bookService.getAll();
            expect(books).toEqual({
                promiseError: { error: "Error", message: "Promise Error" },
            });
        });
    });
    describe("getById", () => {
        it("should return a book", async () => {
            const book = await bookService.getById(fakeId);
            expect(book).toEqual(fakeBooks[0]);
        });
        it("should call BookRepository.getById method", () => {
            jest.spyOn(fakeBookRepository, "getById");
            bookService.getById(fakeId);
            expect(fakeBookRepository.getById).toHaveBeenCalled();
        });
        it("should send an error message in catch sentence", async () => {
            jest.spyOn(fakeBookRepository, "getById").mockRejectedValueOnce("Error");
            const book = await bookService.getById(fakeId);
            expect(book).toEqual({
                promiseError: { error: "Error", message: "Promise Error" },
            });
        });
        it("should send an error message if the id is invaliod", async () => {
            const book = await bookService.getById("invalidId");
            expect(book).toEqual({
                invalidIdError: {
                    message: "Invalid id",
                    id: "invalidId",
                },
            });
        });
    });
    describe("create", () => {
        it("should create a book", async () => {
            const book = await bookService.create(fakeBooks[0]);
            expect(book).toEqual(fakeBooks[0]);
        });
        it("should call BookRepository.create method", () => {
            jest.spyOn(fakeBookRepository, "create");
            bookService.create(fakeBooks[0]);
            expect(fakeBookRepository.create).toHaveBeenCalled();
        });
        it("should send an error message in catch sentence", async () => {
            jest.spyOn(fakeBookRepository, "create").mockRejectedValueOnce("Error");
            const book = await bookService.create(fakeBooks[0]);
            expect(book).toEqual({
                promiseError: { error: "Error", message: "Promise Error" },
            });
        });
    })
    describe("update", () => {
        it("should update a book", async () => {
            const book = await bookService.update(fakeId, updatedBook);
            expect(book).toEqual(updatedBook);
        });
        it("should call BookRepository.update method", () => {
            jest.spyOn(fakeBookRepository, "update");
            bookService.update(fakeId, updatedBook);
            expect(fakeBookRepository.update).toHaveBeenCalled();
        });
        it("should send an error message in catch sentence", async () => {
            jest.spyOn(fakeBookRepository, "update").mockRejectedValueOnce("Error");
            const book = await bookService.update(fakeId, updatedBook);
            expect(book).toEqual({
                promiseError: { error: "Error", message: "Promise Error" },
            });
        });
        it("should send an error message if the id is invaliod", async () => {
            const book = await bookService.update("invalidId", updatedBook);
            expect(book).toEqual({
                invalidIdError: {
                    message: "Invalid id",
                    id: "invalidId",
                },
            });
        });
    })
    describe("delete", () => {
        it("should delete a book", async () => {
            const book = await bookService.delete(fakeId);
            expect(book).toEqual(fakeBooks[0]);
        });
        it("should call BookRepository.delete method", () => {
            jest.spyOn(fakeBookRepository, "delete");
            bookService.delete(fakeId);
            expect(fakeBookRepository.delete).toHaveBeenCalled();
        });
        it("should send an error message in catch sentence", async () => {
            jest.spyOn(fakeBookRepository, "delete").mockRejectedValueOnce("Error");
            const book = await bookService.delete(fakeId);
            expect(book).toEqual({
                promiseError: { error: "Error", message: "Promise Error" },
            });
        });
        it("should send an error message if the id is invaliod", async () => {
            const book = await bookService.delete("invalidId");
            expect(book).toEqual({
                invalidIdError: {
                    message: "Invalid id",
                    id: "invalidId",
                },
            });
        });
    })
});