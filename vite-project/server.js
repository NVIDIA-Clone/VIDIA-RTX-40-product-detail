const express = require('express')
const { Pool } = require('pg')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT

const pool = new Pool ({
    connectionString: process.env.DATABASE_URL
})

app.use(express.static('dist'))
app.use(express.json())

app.get('/product', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM products')
        res.status(200).send(result.rows)
    } catch (err) {
        console.error(err)
        res.status.send('Internal server error.')
    }
})

app.get('/gpu/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM specs WHERE spec_id = $1', [id])
        res.status(200).send(result.rows)
    } catch (err) {
        console.error(err)
        res.status(500).send('Internal server error.')
    }
})

app.listen(PORT, () => {
    console.log('Listening on port', PORT)
})