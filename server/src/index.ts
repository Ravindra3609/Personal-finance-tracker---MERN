// abncp8uZ1diDyNyo     --> mongoDB PWD

import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records";
import cors from "cors";


const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const mongoURI: string =
  "mongodb+srv://ravindranaidukuriti:abncp8uZ1diDyNyo@financetracker.edksiwb.mongodb.net/";

mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect MongoDB"));

app.use("/financial-records" , financialRecordRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
