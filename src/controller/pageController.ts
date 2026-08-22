import type { Request, Response } from "express";
import { createMenuObject } from "../helper/createMenuObject.ts";

export const home = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: createMenuObject('home')
    })
}

export const product = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: createMenuObject('product')
    })
}

export const category = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: createMenuObject('category')
    })
}

export const sobre = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: createMenuObject('sobre')
    })
}