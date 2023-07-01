import express from 'express';
// import path from 'path';
const app = express();
import todoRouter from './routes/todoRouter.ts';
const PORT = Number(process.env.PORT) || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(express.json()); // needed for axios requests
// app.use(express.static(path.join(__dirname, '../../../client')));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/api/todo', todoRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
  console.log('Listening on port: ', PORT);
});
