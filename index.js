import express from "express";
import dotenv from "dotenv";
import cluster from "cluster";
import os from "os";
import rateLimit from "express-rate-limit";
import apiRoutes from "./routes";

dotenv.config();

const PORT = process.env.PORT;

const numberOfCpus = os.cpus().length;

const app = express();

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 10,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", apiRoutes);

app.get("/", limiter, (req, res) => {
  res.status(200).json({
    message: "Welcome to this NodeJs rate limitter example",
  });
});

app.get("*", limiter, (req, res) => {
  res.status(404).json({
    error: "resource not found",
  });
});

if (cluster.isPrimary) {
  for (let i = 0; i < numberOfCpus; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker) => {
    console.log(`worker with processId: ${worker.process.pid}, has died!`);
    cluster.fork();
  });
} else {
  app.listen(PORT, () => {
    console.log(`app listenning on port ${PORT}, processId: ${process.pid}`);
  });
}

export default app;
