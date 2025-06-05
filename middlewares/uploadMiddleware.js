import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images")
  },
  filename: (req, file, cb) => {
      const filename = `${Date.now()}-images-${file.originalname}`
      cb(null, filename)
  },
});

export const uploadMiddleware = multer({ storage });
