const taskModel = require('../models/task');

exports.readTask = (req, res, next) => {
    let _query = {};
    if(Object.keys(req.query).length) {
        _query = req.query;
    }
    taskModel.find(_query, (err, r_task) => {
        if(err) {
            console.log(err);
            res.status(503).send(err);
        } else {
            res.send(r_task);
        }
    });
}

exports.storeTask = (req,res,next)=>{
    let Data = req.body;
    let user = new taskModel(Data)
    user.save((err,task_res)=>{
        if(err)
        {
            console.log(error);
        }
        else
        {
            console.log(task_res);
            res.status(200).send(task_res);
        }
    })
} 

exports.updateTaskById =(req, res, next) => {
    taskModel.findByIdAndUpdate(req.params.id, req.body, (err, r_task) => {
        if (err) {
            console.log(err)
            res.status(503).send(err);
        } else if (r_task) {
            res.send(r_task);
        }
    })
}

exports.readTaskCount = async(req, res, next) => {
    let _query = {};
    let completed=0,pending=0,current=0
    if(Object.keys(req.query).length) {
        _query = req.query;
    } 
    console.log(_query);
    if( Object.keys(_query).length!== 0)
    {
        completed =await taskModel.countDocuments({employee:_query.employee,status:'completed'})
         pending =await taskModel.countDocuments({employee:_query.employee,status:'pending'})
         current =await taskModel.countDocuments({employee:_query.employee,status:'current'})
     
    }
    else
    {
         completed =await taskModel.countDocuments({status:'completed'})
         pending =await taskModel.countDocuments({status:'pending'})
        current =await taskModel.countDocuments({status:'current'})
     
    }
   res.status(200).send({completed,pending,current});
       


}