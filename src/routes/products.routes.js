import { Router } from "express";
import * as ProductController from "../controllers/products.controller";
import { verifyToken } from "../middlewares";

const router = Router();

router.get("/", ProductController.getProducts);
router.post("/", verifyToken, ProductController.createProduct);
router.get("/:productID", ProductController.getProductById);
router.put("/:productID", verifyToken, ProductController.updateProductById);
router.delete("/:productID", verifyToken, ProductController.deleteProductById);

export default router;
