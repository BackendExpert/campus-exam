const express = require('express');
const { authMiddleware } = require('../Middlewares/AuthMiddleware');
const { accessMiddleware } = require('../Middlewares/AccessMiddleware');
const DepartmentController = require('../Controllers/departmentController');

const router = express.Router();

router.get('/gethods', authMiddleware, accessMiddleware(['superadmin']), DepartmentController.getallhods)
router.post('/createDepartment', authMiddleware, accessMiddleware(['superadmin']), DepartmentController.createDepartment)
router.get('/getdeparments', authMiddleware, accessMiddleware(['examadmin', 'superadmin']), DepartmentController.getalldepts)
router.get('/getonedepartment/:id', authMiddleware, accessMiddleware(['hod', 'examadmin', 'superadmin', 'lecturer']), DepartmentController.getonedept)

module.exports = router;