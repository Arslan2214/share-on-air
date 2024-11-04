# 📤 ShareOnAir

<div align="center">
  <p align="center">
    A modern, fast, and secure file sharing application for local networks
    <br />
    <a href="#installation">Installation Guide</a>
    ·
    <a href="#how-it-works">How It Works</a>
  </p>
</div>

## ✨ Features

- 🚀 **Fast Local Sharing** - Share files instantly within your network
- 🔐 **Smart Authentication** - Auto OAuth for large files
- 💾 **Flexible Storage** - Local storage for small files, Google Drive for large ones
- 👥 **Receiver Tracking** - Monitor who accessed your shared files
- 📱 **Responsive UI** - Works seamlessly on all devices
- 🎯 **Simple Interface** - Drag and drop functionality
- 📄 **File Preview** - Preview various file formats directly in the app

## 🛠️ Tech Stack

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Material-UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white)

### Backend
![Bun](https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Google Drive API](https://img.shields.io/badge/Google%20Drive-4285F4?style=for-the-badge&logo=google-drive&logoColor=white)

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/share-on-air.git

# Install dependencies
cd share-on-air
bun install

# Start both client and server
cd server
bun dev

# In another terminal
cd client
bun start
```

## 📁 Project Structure

```plaintext
share-on-air/
├── client/          # React frontend application
├── server/          # Bun/Express backend server
├── .gitignore
└── README.md
```

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

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details 