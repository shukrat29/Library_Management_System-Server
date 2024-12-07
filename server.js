import express from "express";
import { dbConnect } from "./config/dbConfig.js";
import authRouter from "./routes/authRoute.js";

const app = express();

const PORT = process.env.PORT || 8000;

// middlewares
import cors from "cors";
import morgan from "morgan";

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes / api endpoints
app.use("/api/v1/auth", authRouter);

// server runs only if db is connected
dbConnect()
  .then(() => {
    app.listen(PORT, (error) => {
      error
        ? console.log(error)
        : console.log("Server is running at http:/localhost:" + PORT);
    });
  })
  .catch((error) => console.log(error));
