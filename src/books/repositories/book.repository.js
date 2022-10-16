class BookRepository {
    constructor(model) {
        this.model = model; //booksmodel       
    }

    async getAll() {
        const books = await this.model.find();
        return books;
    }

    async getById(id) {
        const book = await this.model.findById(id);
        if (book === null) {
            return {}
        }
        return book;
    }

    async create(book) {
        const newBook = await this.model.create(book);
        return newBook;
    }

    async update(id, book) {
        const updatedBook = await this.model.findByIdAndUpdate(id, {
            $push: {
                resume: book.resume,
                insertedAt: new Date()
            }
        }, { new: true });

        if (updatedBook === null) {
            return {}
        }

        return updatedBook;
    }

    async delete(id) {
        const deletedBook = await this.model.findByIdAndDelete(id);
        if (deletedBook === null) {
            return {}
        }
        return deletedBook;
    }
}

module.exports = {
    BookRepository
}