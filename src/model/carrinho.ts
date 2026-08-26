import type {Produto} from "../model/ler.ts"

export const cart: Produto[] = [];

export function receber(produto: Produto) {
    return cart.push(produto)
}