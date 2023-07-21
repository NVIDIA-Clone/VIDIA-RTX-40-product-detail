/* eslint-disable no-undef */
import express from 'express';
import pg from 'pg';
import dotenv from 'dotenv';
import cors from 'cors';
const { Pool } = pg;
const app = express();
dotenv.config();
const PORT = process.env.PORT;
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.use(express.static('dist'));
app.use(express.json());
app.use(cors({ origin: '*' }));

app.get('/product', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products');
    res.status(200).send(result.rows);
  } catch (err) {
    console.error(err);
    res.status.send('Internal server error.');
  }
});

app.get('/product/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM specs WHERE spec_id = $1', [
      id,
    ]);
    res.status(200).send(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error.');
  }
});

app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});
