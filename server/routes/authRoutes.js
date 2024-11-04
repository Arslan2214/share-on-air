import express from 'express';
const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    res.json({ message: 'Login endpoint' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router; 