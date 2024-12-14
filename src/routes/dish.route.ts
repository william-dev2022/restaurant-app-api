import express from 'express';


const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: ' Index' });
});

router.post('/', (req, res) => {
  res.status(200).json({ message: ' Index' });
});

router.patch('/', (req, res) => {
  res.status(200).json({ message: ' Index' });
});



export default router;