import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
} from "../controllers/productContreller.js";

router.route("/").get(getProducts).post();
router.route("/:id").get(getProductById);

export default router;
