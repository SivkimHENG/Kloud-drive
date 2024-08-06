import multer from "multer";
import path from "path";

const storageEngine = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}--${file.originalname}`);
  },
});

const checkFileType = (file, callback) => {
  let acceptedFiles = /jpeg|png|jpg|gif|svg/;

  let isFileAllowed = acceptedFiles.test(
    path.extname(file.originalname).toLowerCase(),
  );
  let doesMimeWatch = acceptedFiles.test(file.mimetype);

  if (isFileAllowed && doesMimeWatch) {
    return callback(null, true);
  } else {
    callback(
      "Error : You can only upload images ! Try uploadinng a different files",
    );
  }
};

const upload = multer({
  storage: storageEngine,
  limits: {
    fileSize: 100000,
  },
  fileFilter: (req, file, callback) => {
    checkFileType(file, callback);
  },
});

export default upload;
