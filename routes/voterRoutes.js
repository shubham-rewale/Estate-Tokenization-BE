import express from "express";
// eslint-disable-next-line import/extensions
import { addVote, getVotersDetails } from "../controllers/voterController.js";

const voterRouter = express.Router();

voterRouter.get("/getVoters", getVotersDetails);
voterRouter.post("/add", addVote);

export default voterRouter;
