import express, { Request, Response } from "express";
import { rulings } from "../controllers/rulings.controller";
import cors from "cors";
import { publicCorsConfig } from "../util/corsOptions";

const rulingsRouter = express.Router();

rulingsRouter.get(
  "/rulings",
  cors(publicCorsConfig),
  async (req: Request, res: Response) => await rulings(req, res)
);

export default rulingsRouter;
