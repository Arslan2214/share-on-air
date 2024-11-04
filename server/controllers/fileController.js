const multer = require('multer');
const GoogleDriveService = require('../services/googleDrive');

const storage = multer.memoryStorage();
const upload = multer({ 
  storage,
  limits: { fileSize: 100 * 1024 * 1024 } // 100MB limit
});

class FileController {
  async uploadFile(req, res) {
    try {
      const file = req.file;
      
      if (file.size > 10 * 1024 * 1024) { // 10MB
        // Upload to Google Drive
        const driveFile = await GoogleDriveService.uploadFile({
          originalname: file.originalname,
          mimetype: file.mimetype,
          stream: file.buffer
        });
        
        res.json({
          success: true,
          fileId: driveFile.id,
          url: `https://drive.google.com/uc?id=${driveFile.id}`
        });
      } else {
        // Store locally
        // Implementation for local storage
        res.json({
          success: true,
          fileId: 'local-' + Date.now(),
          url: `/files/${file.filename}`
        });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new FileController(); 