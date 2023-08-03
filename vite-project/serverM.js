import { MongoClient } from "mongodb";
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
dotenv.config();

//This is the equivalent to the connection pool in PSQL
    //In PSQL/SQL databases, the connects area persistent
    //In Mongo/NoSQL databases, the connections are per request and do NOT maintain connection
async function connectToDatabase() {
    try {
        //This is creating a client connection using the uri fron the .env file
            //useUnifiedTopology is neccessary for new projects, think of it as configuration for 
                // how the driver handles connections to MongoDB servers
        const client = await MongoClient.connect(process.env.MONGODB_URI, { useUnifiedTopology: true });
        //connect to specific database
         const db = client.db('fecdb');
         //Tells you when the request was made, helps with error handling
         console.log('Connected to MongoDB');
         //Return the connected database for use
         return db;
    } catch (err) {
         console.error('Error connecting to MongoDB:', err);
         throw err;
    }
}

app.use(express.static('dist'));
app.use(express.json());

app.use(cors({ origin: '*' })); 

app.get('/product', async (req, res) => {
    try {
        //Connection to database is made
        const db = await connectToDatabase();
        //Database request is made (You can think of this as an equivalent to "SELECT * FROM products")
            //To array is necessary to grab all the documents from the cursor
            //Cursor Object is what is initially returned from a request 
                //Think of PSQL, we has to result.rows for the specific info, same concept
        const product = await db.collection('products').find().toArray();
        //Send data/product
        res.json(product);
    } catch (err) {
        console.error('Error fetching products:', err);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
  });


app.get('/product/:id', async(req, res) => {
    const { id } = req.params;
    try{
        //Connect to database
        const db = await connectToDatabase()
        //Equivalent to "SELECT * FROM specs WHERE product_id = 1"
        const data = await db.collection('specs').find({'product_id': 1}).toArray();
        res.json(data[0])
    } catch (err) {
        console.error('Error fetching products:', err);
        res.status(500).json({ error: 'Failed to fetch products' });
      }
})



app.listen(8000, () => {
    console.log('Listening on port', 8000);
  });