export const validateFileType = (req, res, next) => {
  const allowedTypes = [
    'image/jpeg',
    'image/png',
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'audio/mpeg',
    'video/mp4'
  ];

  if (!allowedTypes.includes(req.file.mimetype)) {
    return res.status(400).json({ error: 'File type not supported' });
  }

  next();
}; 