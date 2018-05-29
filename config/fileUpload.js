const multer = require('multer');

const storageOptions = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, './file_uploads/');
  },
  filename: function(req, file, cb){
    cb(null, new Date().toISOString() + '_' + file.originalname);
  }
});

const fileFilterOptions = (req, file, cb) => {
  if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/jpg' || file.mimetype == 'image/png'){
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const limitOptions = {
  fileSize : 1024*1024
};

const multerFileUpload = multer({
  storage: storageOptions,
  fileFilter: fileFilterOptions,
  limits : limitOptions
});

module.exports = multerFileUpload;
