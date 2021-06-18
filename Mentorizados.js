const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const MentSchema = new Schema({
    nombre: {
        type: String,
        trim: true
    },
    perfiles: {
        type: String,
        trim: true
    },
    competencias: {
        type: String,
        trim: true
    },
    nivel: {
        type: Number,
        trim: true
    }
});

module.exports = mongoose.model('Mentorizados', MentSchema);