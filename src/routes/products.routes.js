import { Router } from 'express';
import * as ProductController from '../controllers/products.controller';

const router = Router();

router.get('/', ProductController.getProducts);
router.post('/', ProductController.createProduct);
router.get('/:productID', ProductController.getProductById);
router.put('/:productID', ProductController.updateProductById);
router.delete('/:productID', ProductController.deleteProductById);

export default router;