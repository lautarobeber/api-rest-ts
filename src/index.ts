import express from "express";
import diariesRoutes from "./routes/diaries";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";


const app = express();
dotenv.config();

const PORT = process.env.PORT as string;
const uri = process.env.URI as string;

mongoose.connect(uri)
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message);
    
  });

app.use(cors());

app.use(express.json());


app.use('/', express.static('dist'));
// _ Ignora el parametro
app.get("/ping", (_req, res) => {
  console.log("alguien pinguino");
  res.send("pong");
});

app.use("/api/diaries", diariesRoutes);

app.get('*', (_req, res) => {
  res.send("Aca no hay nada!");;
});


app.listen(PORT || 3000, () => {
  console.log(`server running on port ${PORT} `);
});
