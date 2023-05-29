import express from 'express';
const todoRouter = express.Router();
// import pool from '../modules/pool.js';

// GET
todoRouter.get('/', (_, res) => {
  res.send('YOU GOT ME');
});

// POST

// PUT

// DELETE

export default todoRouter;
