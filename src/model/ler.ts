import { readFile} from "fs/promises";

interface Produto {
    id: number,
    nome: string,
    preco: number,
    categoria: string[],
    imagem: string
}

export async function lerArquivo(caminho: string) {
    const ler = await readFile(caminho, {encoding:'utf8'});
    const produtos: Produto[] =  JSON.parse(ler);

    return produtos.map((produto) => ({
        ...produto,
        preco: new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(produto.preco)
    }))
}