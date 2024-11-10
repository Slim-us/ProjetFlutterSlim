import express from "express";
import { addStake, getStakes,calculateTotalRewards,getTotalAmountAndYield   } from "../controllers/StakingController.js";

const router = express.Router();

router.post("/add", addStake);
router.get("/:userId", getStakes);
router.get('/rewards/:userId', calculateTotalRewards);
router.get('/total/:userId', getTotalAmountAndYield);


export default router;
