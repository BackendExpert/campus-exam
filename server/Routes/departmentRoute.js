const express = require('express');
const { authMiddleware } = require('../Middlewares/AuthMiddleware');
const { accessMiddleware } = require('../Middlewares/AccessMiddleware');
const DepartmentController = require('../Controllers/departmentController');

const router = express.Router();

router.post('/createDepartment', authMiddleware, accessMiddleware(['superadmin']), DepartmentController.createDepartment)

module.exports = router;