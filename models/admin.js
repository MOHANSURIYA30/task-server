const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adminSchema = new Schema({
    user_id:{type:String},
    password:{type:String}
})

const adminModel = mongoose.model('admin',adminSchema,'admin')

module.exports = adminModel;