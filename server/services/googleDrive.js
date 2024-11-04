const { google } = require('googleapis');
const path = require('path');

class GoogleDriveService {
  constructor() {
    this.auth = new google.auth.GoogleAuth({
      keyFile: path.join(__dirname, '../config/google-credentials.json'),
      scopes: ['https://www.googleapis.com/auth/drive.file'],
    });
    this.drive = google.drive({ version: 'v3', auth: this.auth });
  }

  async uploadFile(fileObject) {
    try {
      const response = await this.drive.files.create({
        requestBody: {
          name: fileObject.originalname,
          mimeType: fileObject.mimetype,
        },
        media: {
          mimeType: fileObject.mimetype,
          body: fileObject.stream,
        },
      });

      // Make file publicly accessible
      await this.drive.permissions.create({
        fileId: response.data.id,
        requestBody: {
          role: 'reader',
          type: 'anyone',
        },
      });

      return response.data;
    } catch (error) {
      throw new Error(`Failed to upload file to Google Drive: ${error.message}`);
    }
  }
}

module.exports = new GoogleDriveService(); 