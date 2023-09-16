import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  deleteReview,
} from "../controllers/productContreller.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getProducts).post(protect, admin, createProduct);
router
  .route("/:id/reviews")
  .post(protect, createProductReview)
  // .delete(protect, deleteReview);
  .route("/:productId/reviews")
  // ...
  .delete(protect, deleteReview);
router
  .route("/:id")
  .get(getProductById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);

export default router;
