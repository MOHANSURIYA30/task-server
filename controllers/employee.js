const employeeModel = require('../models/employee');

exports.readEmployee = (req, res, next) => {
    let _query = {};
    if(Object.keys(req.query).length) {
        _query = req.query;
    }
    employeeModel.find(_query, (err, r_employee) => {
        if(err) {
            console.log(err);
            res.status(503).send(err);
        } else {
            res.send(r_employee);
        }
    });
}

exports.registerEmployee = (req,res,next)=>{
    let userData = req.body;
    let user = new employeeModel(userData)
    user.save((err,user_res)=>{
        if(err)
        {
            console.log(error);
        }
        else
        {
            console.log(user_res);
            res.status(200).send(user_res);
        }
    })
} 

exports.loginEmployee = (req,res,next)=>{
    let userData =req.body;

    employeeModel.findOne({user_id:userData.user_id},(err,user_res)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            if(!user_res)
            {
                res.status(401).send("Invalid User ID");
            }
            else{
                if(user_res.password !== userData.password)
                {
                    res.status(401).send("INVALID PASSWORD");
                }
                else
                {
                    res.status(200).send(user_res)
                }
            }
        }
    })
}
