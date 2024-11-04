// Modify upload limits if needed
const upload = multer({
  limits: {
    fileSize: 100 * 1024 * 1024 // 100MB
  }
}); 