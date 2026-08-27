import type {Produto} from "../model/ler.ts"

export const cart: Produto[] = [];

export function receber(produto: Produto) {
     cart.push(produto)
}

export function remove(produto: number) {
   cart.splice(produto, 1)
}

export function soma() {
    return cart.reduce((total, produto) => {
      return total + produto.preco
    }, 0)
}