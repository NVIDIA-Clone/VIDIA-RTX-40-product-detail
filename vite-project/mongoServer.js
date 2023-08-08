import express from 'express';
import { ObjectId }  from 'mongodb'
import { connectToDb, getDb } from './db.js';
import dotenv from 'dotenv';
import cors from 'cors';



dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(express.static('dist'));
app.use(express.json());
app.use(cors({
  origin: "*"
}));

if (cluster.isMaster) {
  const cpuCount = os.cpus().length;
  for (let i = 0; i < cpuCount; i++) {
    cluster.fork();
  }

connectToDb((err) => {
    if (!err) {
        app.listen(PORT, () => {
            console.log(`listening on port ${PORT}`)
        })
        db = getDb()
    }
})


//get all from specs
app.get('/VIDIA_database/specs', (req, res) => {
    let specs = [];

    db.collection('specs')
        .find()
        .sort({ name: 1 })
        .toArray()
        // .forEach(products => products.push(products))
        .then((specs) => {
            res.status(200).json(specs)
        })
        .catch(() => {
            res.status(500).json({error: 'Could not fetch from Database'})
        })
})

//get all from products
app.get('/VIDIA_database/products', (req, res) => {
    let products = [];

    db.collection('products')
        .find()
        .sort({ name: 1 })
        .toArray()
        .then((products) => {
            res.status(200).json(products)
        })
        .catch(() => {
            res.status(500).json({error: 'Could not fetch from Database'})
        })
})

//get one from specs Id
app.get('/VIDIA_database/:id', (req, res) => {

    if (ObjectId.isValid(req.params.id)) {
        db.collection('specs')
        .findOne({_id: new ObjectId(req.params.id)})
        .then(doc => {
            res.status(200).json(doc)
        })
        .catch(err => {
        res.status(500).json({error: 'Could not fetch in the Database'})
    })
} else {
    res.status(500).json({error: 'Not valid ID'})
}
})

//post to products
app.post('/VIDIA_database/products', (req, res) => {
    const product = req.body

    db.collection('products')
    .insertOne(product)
    .then(result => {
        res.status(201).json(result)
    })
    .catch(err => {
        res.status(500).json({err: 'Could not create in the Database'})
    })
})

//post to specs
app.post('/VIDIA_database/specs', (req, res) => {
    const spec = req.body

    db.collection('specs')
    .insertOne(spec)
    .then(result => {
        res.status(201).json(result)
    })
    .catch(err => {
        res.status(500).json({err: 'Could not create in the Database'})
    })
})





      app.listen(PORT, () => {
        console.log(`listening on port ${PORT}`);
      });
    } else {
      console.error("Error connecting to the database:", err);
    }
  });
}
