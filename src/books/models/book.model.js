const { Schema, model } = require('mongoose');

//O Schema é o modelo de como os dados serão armazenados no banco de dados
const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    resume: [String],
    insertedAt: [Date],
});


//O model é o objeto que será exportado para ser usado em outros arquivos
//ele carrega os métodos do mongoose para manipular os dados
const BookModel = model('Book', bookSchema);

module.exports = { BookModel };