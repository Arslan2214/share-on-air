import { expect, test, describe, beforeAll, afterAll } from "bun:test";
import express from 'express';
import cors from 'cors';
import multer from 'multer';

const TEST_PORT = 5001; // Different port for testing
const TEST_URL = `http://localhost:${TEST_PORT}`;

describe("API Tests", () => {
  let app;
  let server;

  beforeAll(() => {
    // Create test server
    app = express();
    app.use(cors());

    // Configure multer for file upload
    const storage = multer.memoryStorage();
    const upload = multer({ 
      storage,
      limits: { fileSize: 100 * 1024 * 1024 } // 100MB limit
    });

    // Test routes
    app.post('/api/files/upload', upload.single('file'), (req, res) => {
      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      const fileSize = req.file.size;
      if (fileSize > 10 * 1024 * 1024) { // 10MB
        return res.status(401).json({ error: 'Authentication required for large files' });
      }

      res.json({ 
        success: true,
        file: {
          name: req.file.originalname,
          size: req.file.size
        }
      });
    });

    // Start server
    server = app.listen(TEST_PORT);
  });

  afterAll((done) => {
    server.close(done);
  });

  // Test small file upload
  test("should upload small file without auth", async () => {
    const smallContent = new Uint8Array(Buffer.from('test content'));
    const formData = new FormData();
    formData.append('file', new Blob([smallContent], { type: 'text/plain' }), 'test.txt');

    try {
      const response = await fetch(`${TEST_URL}/api/files/upload`, {
        method: "POST",
        body: formData
      });
      
      expect(response.status).toBe(200);
      
      const data = await response.json();
      expect(data.success).toBe(true);
    } catch (error) {
      console.error('Test failed:', error);
      throw error;
    }
  });

  // Test large file upload
  test("should require auth for large file", async () => {
    // Create a 11MB file
    const largeContent = new Uint8Array(11 * 1024 * 1024);
    const formData = new FormData();
    formData.append('file', new Blob([largeContent], { type: 'text/plain' }), 'large.txt');

    try {
      const response = await fetch(`${TEST_URL}/api/files/upload`, {
        method: "POST",
        body: formData
      });
      
      expect(response.status).toBe(401);
    } catch (error) {
      console.error('Test failed:', error);
      throw error;
    }
  });
}); 