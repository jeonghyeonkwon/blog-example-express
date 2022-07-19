import * as express from "express";
import { apiReceive, callAxios } from "../controller/apiController";
const router = express.Router();

router.post("/call/axios", callAxios);

router.post("/receive", apiReceive);

export default router;
