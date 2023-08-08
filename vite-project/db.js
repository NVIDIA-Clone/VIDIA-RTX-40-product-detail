import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();
let dbConnection;

export function connectToDb(cb) {
  MongoClient.connect(process.env.DB_URI)
    .then((client) => {
      dbConnection = client.db("fecdb");
      return cb();
    })
    .catch((err) => {
      console.log(err);
      return cb(err);
    });
}

export function getDb() {
  return dbConnection;
}
