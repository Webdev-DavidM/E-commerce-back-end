// multer is used to upload photos from the user
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';

const MIME_TYPE_MAP = {
  'image/png': 'png',
  'image/jpeg': 'jpeg',
  'image/jpg': 'jpg',
};

export const fileUpload = multer({
  limits: 5000000,
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/uploadedimages');
    },
    filename: (req, file, cb) => {
      const ext = MIME_TYPE_MAP[file.mimetype];
      let imageId = `${uuidv4()}.${ext}`;

      cb(null, imageId);
    },
  }),
  fileFilter: (req, file, cb) => {
    const isValid = !!MIME_TYPE_MAP[file.mimetype];
    let error = isValid ? null : new Error('invalid mime type');

    cb(error, isValid);
  },
});

export default fileUpload;
