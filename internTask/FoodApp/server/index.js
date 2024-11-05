import express from "express";
import dotenv from "dotenv";
import connectionDb from "./db/connectionDb.js";
dotenv.config();

const app = express();
connectionDb().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is listening on PORT ${process.env.PORT}`);
  });
});
