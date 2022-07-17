import * as express from "express";
import { apiReceive } from "../controller/apiController";
const router = express.Router();

router.post("/receive", apiReceive);

export default router;
