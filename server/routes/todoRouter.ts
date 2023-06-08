import express from 'express';
const todoRouter = express.Router();
import {
  createItem,
  deleteItem,
  getCompletedItems,
  getItems,
  getUncompletedItems,
  updateItem,
} from '../querries/todoQuerries.ts';

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

// GET ONLY COMPLETE ITEMS
todoRouter.get('/complete', async (_, res) => {
  try {
    const items = await getCompletedItems();
    res.send(items);
  } catch (error: any) {
    console.error(error);
    res.sendStatus(500);
  }
});

// GET ONLY UNCOMPLETE ITEMS
todoRouter.get('/uncomplete', async (_, res) => {
  try {
    const items = await getUncompletedItems();
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
todoRouter.put('/:itemId', async (req, res) => {
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
todoRouter.delete('/:itemId', async (req, res) => {
  const itemId = req.params.itemId;

  try {
    await deleteItem(itemId);
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

export default todoRouter;
