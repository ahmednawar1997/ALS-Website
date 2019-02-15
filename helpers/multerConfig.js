var multer = require("multer");

var date = (new Date()).getFullYear();
var maxSize = 50 * 1024 * 1024;

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload/admissions');
    },
    filename: function (req, file, callback) {
        callback(null, date + '-' + file.originalname);
    }
});
var upload = multer({
    storage: storage,
    limits: {
        fileSize: maxSize
    }
});


module.exports = upload;