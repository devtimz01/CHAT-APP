const express = require('express');
const app = require('express');
const router = express.Router();
const {register}=require('../controller/authCcontroller');

router.post('/signup',register);
router.post('/loginn', login);