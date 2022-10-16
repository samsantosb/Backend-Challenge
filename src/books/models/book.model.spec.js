const { BookModel } = require('./book.model');
const { describe, it, before, after } = global;

//verifica se o model foi criado corretamente
describe("BookModel", () => {
    it("should create the book model", () => {
        expect(BookModel).toBeDefined();
    });
});
