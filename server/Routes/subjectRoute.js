const express = require('express');
const { authMiddleware } = require('../Middlewares/AuthMiddleware');
const { accessMiddleware } = require('../Middlewares/AccessMiddleware');
const subjectController = require('../Controllers/subjectController');

const router = express.Router();

router.post('/createsubject', authMiddleware, accessMiddleware(['superadmin', 'examadmin']), subjectController.createSubject)

module.exports = router;