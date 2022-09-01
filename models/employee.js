const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const empSchema = new Schema({
    user_id:{type:String},
    password:{type:String}
})

const empModel = mongoose.model('employee',empSchema,'employee')

module.exports = empModel;