const { BookModel } = require("../books/models/book.model");
const { mongoConnect, mongoDisconnect } = require('./mongo.connect');

async function seed() {
    const books = [
        {
            title: "The Lord of the Rings",
            resume: ["The Lord of the Rings is an epic high fantasy novel written by English author and scholar J. R. R. Tolkien. The story began as a sequel to Tolkien's 1937 fantasy novel The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling novels ever written, with over 150 million copies sold."],
            insertedAt: [new Date()]
        },
        {
            title: "The Hobbit",
            resume: ["The Hobbit, or There and Back Again is a children's fantasy novel by English author J. R. R. Tolkien. It was published on 21 September 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction. The book remains popular and is recognized as a classic in children's literature."],
            insertedAt: [new Date()]
        },
        {
            title: "The Chronicles of Narnia",
            resume: ["The Chronicles of Narnia is a series of seven fantasy novels by C. S. Lewis. It is considered a classic of children's literature and is the author's best-known work, having sold over 100 million copies in 47 languages. The series is set in the fictional realm of Narnia, a fantasy world of magic, mythical beasts, and talking animals. The series is about the adventures of various children who play a role in the unfolding history of Narnia."],
            insertedAt: [new Date()]
        },
    ]

    mongoConnect();
    try {
        await BookModel.insertMany(books);
    } catch (error) {
        console.log('Erro no processo de seeding')
        console.log(error);
    }

    console.log("DB successfully seeded");

    mongoDisconnect();
}
seed();