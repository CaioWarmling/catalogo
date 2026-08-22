import { Router } from "express";
import * as pageController from "../controller/pageController.ts";

const router = Router()

router.get('/', pageController.home);


export default router