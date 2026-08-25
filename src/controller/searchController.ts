import type { Request, Response } from 'express';
import { createMenuObject } from "../helper/createMenuObject.ts";
import path from "path";
import { lerArquivo } from "../model/ler.ts";

const caminho = path.join(process.cwd(), 'src', 'data', 'products.json')

export const searchProduct = async (req: Request, res: Response) => {

    const ler = await lerArquivo(caminho)

    let id: string = req.query.q as string;

    if(!id) {
        return res.status(404).render('pages/page', {
            produto: 'Produto não encontrado!'
        })
    }

    const produtos = ler.filter(item => item.nome.trim().toLowerCase().includes(id.trim().toLowerCase()));

    

    res.render('pages/page', {

        menu: createMenuObject(''),
        ler: produtos
    })

}