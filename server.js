const express = require('express')
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000

const adminRoutes = require('./routes/admin');
const employeeRoutes = require('./routes/employee');
const taskRoutes = require('./routes/task');


const app = express()
// mongoose.connect("mongodb://localhost:27017/management", err =>{
//     if(err)
//     {
//         console.log("Cannot connect to db!!!!!");
//     }
//     else
//     {
//         console.log("Connected to DB");
//     }
// });

mongoose.connect("mongodb+srv://mohansuriya:MOHANsuriya%4022@cluster0.ynygxca.mongodb.net/test", err =>{
    if(err)
    {
        console.log("Cannot connect to db!!!!!");
    }
    else
    {
        console.log("Connected to DB");
    }
});

app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({extended: true} ));

// ALTERNATE USER CORS
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
  
    next();
    
  });

  app.use("/api/admin",adminRoutes);
  app.use("/api/employee",employeeRoutes);
  app.use("/api/task",taskRoutes);

app.get('/',(req,res,next)=>{
    res.send("HELLO FROM SERVER");
})

app.listen(PORT,()=>{
    console.log("Server running on loaclhost:"+PORT);
}) 