const express = require('express');
const multer = require('multer');
const { imageUpload } = require('../controllers/imageController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('image'), imageUpload);

module.exports = router;