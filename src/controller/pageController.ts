import type { Request, Response } from "express";
import { createMenuObject } from "../helper/createMenuObject.ts";
import path from "path";
import { lerArquivo } from "../model/ler.ts";

const caminho = path.join(process.cwd(), 'src', 'data', 'products.json' )

export const home = async (req: Request, res: Response) => {
    const ler = await lerArquivo(caminho)

    res.render('pages/page', {
        menu: createMenuObject('home'),
        banner: {
            background: 'hero.jpg'
        },
        ler
    });
}

export const product = async (req: Request, res: Response) => {
    const ler = await lerArquivo(caminho)
    
    res.render('pages/page', {
        menu: createMenuObject('product'),
        banner: false,
        ler
    })
}

export const category = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: createMenuObject('category'),
        banner: false
    })
}

export const sobre = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: createMenuObject('sobre'),
        banner: false
    })
}