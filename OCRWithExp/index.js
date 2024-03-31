const express = require('express');
const app = express();
const multer = require('multer');
const tesseract = require('tesseract.js');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },

    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({storage: storage});

app.post('/api/upload', upload.single('uploadedImage'), (req, res) => {
    console.log('file uploaded successfully');
    console.log(ctx.req.file);

    try {
        tesseract.recognize(
            'uploads/' + req.file.originalname,
            'eng',
            { logger: m => console.log(m) }
        ).then(({ data: { text } }) => {
            return res.json({ 
                message : text
            });
        });
    } catch (error) {
        console.error(error);
    }
});

app.listen(4000, () => {
    console.log('Server is listening on port 4000 http://localhost:4000/');
    }
);