import express from 'express';
import ViteExpress from 'vite-express';
const app = express();
import todoRouter from './routes/todo.router';
const PORT = Number(process.env.PORT) || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(express.json()); // needed for axios requests
app.use(express.static('build'));

// static
// app.use(express.static('public/'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/api/todo', todoRouter);

/** ---------- START SERVER ---------- **/
ViteExpress.listen(app, PORT, () => {
  console.log('Listening on port: ', PORT);
});
