import { Router } from "express";
import * as pageController from "../controller/pageController.ts";

const router = Router()

router.get('/', pageController.home);
router.get('/products', pageController.product);
router.get('/category', pageController.category);
router.get('/sobre', pageController.sobre);



export default router