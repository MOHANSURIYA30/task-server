const express = require('express')
const router = express.Router()

const taskController = require("../controllers/task");
router.get('/',taskController.readTask)
router.post('/',taskController.storeTask);
router.put('/:id',taskController.updateTaskById);


router.get('/count',taskController.readTaskCount)


module.exports = router