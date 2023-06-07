import express from 'express';
const todoRouter = express.Router();
import { createItem, getItems, updateItem } from '../querries/todoQuerries.ts';

// GET
todoRouter.get('/', async (_, res) => {
  try {
    const items = await getItems();
    res.send(items);
  } catch (error: any) {
    console.error(error);
    res.sendStatus(500);
  }
});

// POST
todoRouter.post('/', async (req, res) => {
  const newTodo = req.body;
  console.log(newTodo);
  try {
    await createItem(newTodo);
    res.sendStatus(201);
  } catch (error: any) {
    console.error(error);
    res.sendStatus(500);
  }
});

// PUT
todoRouter.put(':itemId', async (req, res) => {
  const itemId = req.params.itemId;
  const updatedItem = req.body;

  try {
    await updateItem(itemId, updatedItem);
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

// DELETE

export default todoRouter;
