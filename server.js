import express from "express";

const app = express();

const PORT = process.env.PORT || 8000;

// DB Connection
import { dbConnect } from "./config/dbConfig.js";
dbConnect();

// middlewares
import cors from "cors";
import morgan from "morgan";

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Server status
app.get("/", (req, res) => {
  res.json({
    message: "Server is alive",
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log("Server is running at http:/localhost:" + PORT);
});
