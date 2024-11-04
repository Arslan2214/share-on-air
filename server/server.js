import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import fileRoutes from './routes/fileRoutes.js';
import authRoutes from './routes/authRoutes.js';

const app = express();
export const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    methods: ["GET", "POST"]
  }
});

// Create uploads directory if it doesn't exist
import { mkdir } from 'fs/promises';
try {
  await mkdir('./uploads', { recursive: true });
} catch (err) {
  console.error('Error creating uploads directory:', err);
}

app.use(cors());
app.use(express.json());
app.use('/api/files', fileRoutes);
app.use('/api/auth', authRoutes);

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log('New client connected');
  
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 5000;

// Only start the server if this file is run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app; 