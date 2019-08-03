import express, { Request, Response } from 'express';
const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    return res.status(200).json({ users: 'Foi?' });
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
