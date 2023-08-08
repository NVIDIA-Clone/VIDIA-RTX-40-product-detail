import express from "express";
import { ObjectId } from "mongodb";
import { connectToDb, getDb } from "./db.js";
import dotenv from "dotenv";
import cors from "cors";
import cluster from "cluster";
import os from "os";
import { check, validationResult } from "express-validator";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.static("dist"));
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5175']
}));

if (cluster.isMaster) {
  const cpuCount = os.cpus().length;
  for (let i = 0; i < cpuCount; i++) {
    cluster.fork();
  }

  cluster.on("exit", () => {
    console.log("Worker died. Spawning a new process...");
    cluster.fork();
  });
} else {
  connectToDb((err) => {
    if (!err) {
      let db = getDb();

      const logWorkerAndMemory = (req, res, next) => {
        const workerId = cluster.isWorker ? cluster.worker.id : "Master";
        const memoryUsage = process.memoryUsage().heapUsed;

        console.log(`Worker ID: ${workerId}`);
        console.log(`Memory Usage: ${memoryUsage} bytes`);

        next();
      };

      // Get all from specs
      app.get("/VIDIA_database/specs", logWorkerAndMemory, (req, res) => {

        db.collection("specs")
          .find()
          .sort({ name: 1 })
          .toArray()
          .then((specs) => {
            res.status(200).json(specs);
          })
          .catch(() => {
            res.status(500).json({ error: "Could not fetch from Database" });
          });
      });

      // Get all from products
      app.get("/VIDIA_database/products", logWorkerAndMemory, (req, res) => {
        db.collection("products")
          .find()
          .sort({ name: 1 })
          .toArray()
          .then((products) => {
            res.status(200).json(products);
          })
          .catch(() => {
            res.status(500).json({ error: "Could not fetch from Database" });
          });
      });

      // Get one from specs by ID
      app.get("/VIDIA_database/specs/:id", logWorkerAndMemory, (req, res) => {
        if (ObjectId.isValid(req.params.id)) {
          db.collection("specs")
            .findOne({ _id: new ObjectId(req.params.id) })
            .then((doc) => {
              res.status(200).json(doc);
            })
            .catch(() => {
              res
                .status(500)
                .json({ error: "Could not fetch from the Database" });
            });
        } else {
          res.status(500).json({ error: "Not valid ID" });
        }
      });

      // Post to products
      app.post("/VIDIA_database/products", logWorkerAndMemory, (req, res) => {
        const product = req.body;

        db.collection("products")
          .insertOne(product)
          .then((result) => {
            res.status(201).json(result);
          })
          .catch(() => {
            res.status(500).json({ error: "Could not create in the Database" });
          });
      });

      // Post to specs
      app.post("/VIDIA_database/specs", logWorkerAndMemory, (req, res) => {
        const spec = req.body;

        db.collection("specs")
          .insertOne(spec)
          .then((result) => {
            res.status(201).json(result);
          })
          .catch(() => {
            res.status(500).json({ error: "Could not create in the Database" });
          });
      });

      // ... Existing code for the clustering ...
      app.get("/status", (req, res) => {
        // Get worker id (if applicable)
        const workerId = cluster.isWorker ? cluster.worker.id : "Master";

        // Get memory usage
        const memoryUsage = process.memoryUsage();

        // Get system memory
        const totalSystemMemory = os.totalmem();
        const freeSystemMemory = os.freemem();

        // Get CPU information
        const cpus = os.cpus();

        // Respond with the gathered information
        res.status(200).json({
          workerId,
          memoryUsage,
          totalSystemMemory,
          freeSystemMemory,
          cpus,
        });
      });

      app.post(
        "/VIDIA_database/users",
        [
          check("username", "Please enter a valid username")
            .not()
            .isEmpty()
            .isLength({ min: 8 }),
          check("password", "Plese enter a valid password")
            .not()
            .isEmpty()
            .isLength({ min: 10 })
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&]).{10,}$/),
        ],
        (req, res) => {
          const user = req.body;
          const errors = validationResult(req);
          console.log(errors.errors);
          if (errors.errors.length > 0) {
            res.status(400).send("Invalid password or username.");
          } else {
            db.collection("users")
              .insertOne(user)
              .then((result) => {
                res.status(201).json(result);
              })
              .catch((err) => {
                res
                  .status(500)
                  .json({ err: "Could not create user in the Database" });
              });
          }
        }
      );

      app.listen(PORT, () => {
        console.log(`listening on port ${PORT}`);
      });
    } else {
      console.error("Error connecting to the database:", err);
    }
  });
}
