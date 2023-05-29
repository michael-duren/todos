import express from 'express';
const app = express();
import todoRouter from './routes/todo.router.js';
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(express.json()); // needed for axios requests
app.use(express.static('build'));

// static
app.use(express.static('/public/index.html'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/todo', todoRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
  console.log('Listening on port: ', PORT);
});
