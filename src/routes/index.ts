import { Router } from "express";
import * as pageController from "../controller/pageController.ts";
import * as searchController from "../controller/searchController.ts";

const router = Router()

router.get('/', pageController.home);
router.get('/products', pageController.product);
router.get('/category', pageController.category);
router.get('/sobre', pageController.sobre);
router.get('/products/:id', pageController.productDetail);
router.get('/category/:categoria', pageController.categoryFind);
router.get('/search', searchController.searchProduct);



export default router