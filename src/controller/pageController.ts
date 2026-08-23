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
        ler,
        categoria: true
    });
}

export const product = async (req: Request, res: Response) => {
    const ler = await lerArquivo(caminho)
    
    res.render('pages/page', {
        menu: createMenuObject('product'),
        banner: false,
        ler,
        categoria: false
    })
}

export const productDetail = async (req: Request, res: Response) => {
    const ler = await lerArquivo(caminho)

    const id = Number(req.params.id);

    const produtos = ler.find(produto => produto.id === id)
    
    res.render('pages/productDetail', {
        menu: createMenuObject('product'),
        banner: false,
        ler,
        produto: produtos,
        categoria: false
    })
}

export const category = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: createMenuObject('category'),
        banner: false,
        categoria: true
    })
}

export const sobre = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: createMenuObject('sobre'),
        banner: false,
        categoria: false
    })
}