// require("dotenv").config({ path: "./.env" });
import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import dotenv from "dotenv";
import connectDB from "./db/database.js";
import { app } from "./app.js";

dotenv.config({ path: "./.env" });

const port = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server started at port : ${port}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed ! ", error);
  });
