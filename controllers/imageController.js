const cloudinary = require('../config/cloudinary');

const imageUpload = (async (req, res) => {
    try {

        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: "test_uploads"   // optional folder name
        });
        // console.log('result------', result);
        res.status(200).json({
            url: result.secure_url,
            msg: "Image uploaded successfully"
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
})

module.exports = {imageUpload}