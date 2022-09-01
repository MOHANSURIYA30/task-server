const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const autopopulate = require('mongoose-autopopulate');

const taskSchema = new Schema({
    task:{type:String,required:true},
    status:  { type:String,required:true,default:'pending'},
    employee:{ type: ObjectId, required: true, ref: 'employee', autopopulate:{ select: 'user_id' }  },
});
taskSchema.plugin(autopopulate);

const taskModel = mongoose.model('task',taskSchema,'task')

module.exports = taskModel;



