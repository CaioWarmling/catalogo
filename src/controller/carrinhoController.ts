import type { Request, Response } from "express";
import { cart, receber, remove, soma } from "../model/carrinho.ts";;
import path from "path";
import { lerArquivo } from "../model/ler.ts";

const caminho = path.join(process.cwd(), 'src', 'data', 'products.json');


export const carrinho = async (req: Request, res: Response) => {

    const total = soma()


    res.render('pages/carrinho', {
        carrinho: cart,
        total: new Intl.NumberFormat('pt-BR', {
            style: "currency",
            currency: 'BRL'
        }).format(total)
    })
}

export const carrinhoTotal = async (req: Request, res: Response) => {
    const ler = await lerArquivo(caminho);

    const id = Number(req.params.id);

    const produto = ler.find(item => item.id === id);

    if(produto === undefined){ 
        return res.status(404).render('pages/page', {
            produto: 'Produto não encontrado!'
        })
    }

    receber(produto)
    

    res.redirect('/carrinho')

}

export const carrinhoRemove = async (req: Request, res: Response) => {

    const id = Number(req.params.id);

    const produto = cart.findIndex(item => item.id === id);

    if(produto === -1){ 
        return res.status(404).render('pages/page', {
            produto: 'Produto não encontrado!'
        })
    }

    remove(produto)
    

    res.redirect('/carrinho')
}