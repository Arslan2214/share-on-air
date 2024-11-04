# 🖧 ShareOnAir Server

<div align="center">
  <p align="center">
    High-performance Bun/Express backend for ShareOnAir
  </p>
</div>

## 🚀 Quick Start

```bash
# Install dependencies
bun install

# Start development server
bun dev

# Run tests
bun test
```

## 🛠️ Tech Stack

![Bun](https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white)
![Google Drive API](https://img.shields.io/badge/Google%20Drive-4285F4?style=for-the-badge&logo=google-drive&logoColor=white)

## 📁 Structure

```plaintext
server/
├── config/              # Configuration files
├── controllers/         # Request handlers
├── middleware/          # Custom middleware
├── routes/             # API routes
├── services/           # Business logic
├── test/               # Test files
└── server.js           # Main server file
```

## 🔌 API Endpoints

### File Operations
```plaintext
POST /api/files/upload   # Upload file
GET  /api/files/:id     # Get file info
GET  /api/files/download/:id  # Download file
```

### Authentication
```plaintext
POST /api/auth/google   # Google OAuth
GET  /api/auth/status   # Auth status
```

## ⚙️ Configuration

```plaintext
# .env
PORT=5000
CLIENT_URL=http://localhost:3000
GOOGLE_APPLICATION_CREDENTIALS=./config/google-credentials.json
```

## 🔐 Security Features

- File size validation
- MIME type checking
- Rate limiting
- CORS configuration
- OAuth integration

## 📡 WebSocket Events

- `connection`: New client connected
- `disconnect`: Client disconnected
- `FILE_ACCESS`: File access event
- `RECEIVER_ACTION`: Receiver activity

## 💾 Storage

- Local storage for files < 10MB
- Google Drive for larger files
- Automatic cleanup
- Stream processing

## 🧪 Testing

```bash
# Run all tests
bun test

# Run specific test
bun test test/api.test.js
```

## 📊 Monitoring

- Request logging
- Error tracking
- Performance metrics
- WebSocket connections

## 🔧 Maintenance

- Auto-cleanup of old files
- Session management
- Error handling
- Logging system

## 🌟 How It Works

1. 📤 **File Upload**
   - Drag & drop or select files
   - Automatic size detection
   - Smart storage selection

2. 🔄 **Processing**
   - Small files → Local storage
   - Large files → Google Drive
   - Real-time progress tracking

3. 📡 **Sharing**
   - Instant local network detection
   - Secure file transfer
   - Real-time receiver tracking

## 🔧 Installation

Detailed installation guide in [INSTALLATION.md](./INSTALLATION.md)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## 📞 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)

Project Link: [https://github.com/yourusername/share-on-air](https://github.com/yourusername/share-on-air)
