const mongoose = require('mongoose');

let tareaSchema = new mongoose.Schema({
    idTarea : Number,
    nombre : String
});

module.exports = mongoose.model('tarea', tareaSchema, 'Tarea');