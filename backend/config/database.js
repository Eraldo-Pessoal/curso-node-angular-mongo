/**
 * Created by eraldo on 16/01/2018.
 */

const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb://localhost/db_finance')

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório!"
