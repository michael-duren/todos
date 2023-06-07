import express from 'express';
const todoRouter = express.Router();
import { getItems } from '../querries/todo.querries.ts';

// GET
todoRouter.get('/api/items', async (_, res) => {
  try {
    const items = await getItems();
    res.send(items);
  } catch (err: any) {
    console.error(err);
  }
});

// POST

// PUT

// DELETE

export default todoRouter;
