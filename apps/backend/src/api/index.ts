import express, { Request, Response } from "express";
import cors from "cors";

const init = () => {
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(express.json());
  app.use(
    cors({
      origin: process.env.CORS_ORIGIN || "http://localhost:8080",
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );

  app.get("/health", (_: Request, res: Response) => {
    res.json({ status: "ok" });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

export default init;
