import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import bookRoute from "./routes/book.route.js";
import userRoute from "./routes/user.route.js";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
const port = process.env.PORT || 3000;
const URI = process.env.mongoDBURI;

// connect with Mongo
try {
  mongoose.connect(URI);
  console.log("Connected to Db");
} catch (error) {
  console.log("Error", error);
}

// defining Routes

app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
