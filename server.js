import express from "express";
import { dbConnect } from "./config/dbConfig.js";
import authRouter from "./routes/authRoute.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

const PORT = process.env.PORT || 8000;

// middlewares
import cors from "cors";
import morgan from "morgan";
import { responseClient } from "./middleware/responseClient.js";

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes / api endpoints
app.use("/api/v1/auth", authRouter);

// server status
app.get("/", (req, res) => {
  const message = "Server is live";
  responseClient(req, res, message);
});

app.use(errorHandler);

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
