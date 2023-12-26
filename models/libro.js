const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/biblioteca", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const libroSchema = new mongoose.Schema({
    titulo: String,
    autor: String
}, { collection: 'libros' });

const Libro = mongoose.model('Libro', libroSchema);

module.exports = Libro;