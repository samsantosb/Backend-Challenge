//simulação do banco de dados
const fakeId = "632130d41623c49bf7b1c7e9";
const fakeId2 = "632130d41623c49bf7b1c7e8";

const fakeBooks = [
    {
        id: fakeId,
        title: 'The Lord of the Rings',
        resume: [
            'The Lord of the Rings is an epic high'
        ],
        insertedAt: ['10/10/2020']
    },
    {
        id: fakeId2,
        title: 'The Hobbit',
        resume: [
            'The Hobbit, or There and Back'
        ],
        insertedAt: ['10/10/2020']
    },
]

const updatedBook = {
    id: fakeId,
    title: 'The Lord of the Rings',
    resume: [
        'The Lord of the Rings.'
    ],
    insertedAt: ['10/10/2020', '11/10/2020']
}

module.exports = {
    fakeBooks,
    updatedBook,
    fakeId,
    fakeId2
}