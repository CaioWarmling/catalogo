import { Router } from "express";
import * as pageController from "../controller/pageController.ts";
import * as searchController from "../controller/searchController.ts";
import * as  carrinhoController  from "../controller/carrinhoController.ts";

const router = Router()

router.get('/', pageController.home);
router.get('/products', pageController.product);
router.get('/category', pageController.category);
router.get('/sobre', pageController.sobre);
router.get('/products/:id', pageController.productDetail);
router.get('/category/:categoria', pageController.categoryFind);
router.get('/search', searchController.searchProduct);
router.get('/carrinho', carrinhoController.carrinho);
router.post('/carrinho/:id', carrinhoController.carrinhoTotal)
router.post('/carrinho/remove/:id', carrinhoController.carrinhoRemove)



export default router