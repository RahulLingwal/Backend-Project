// require("dotenv").config({ path: "./.env" });
import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import dotenv from "dotenv";
import connectDB from "./db/database.js";

dotenv.config({ path: "./.env" });

connectDB();
