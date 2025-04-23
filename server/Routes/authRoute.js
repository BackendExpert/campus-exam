const express = require('express');
const authControoler = require('../Controllers/authController');

const router = express.Router();

router.post('/signup', authControoler.signup)
router.post('/signin', authControoler.signin)

module.exports = router;