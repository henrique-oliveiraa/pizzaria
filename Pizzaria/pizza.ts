
export class pizza {
    sabor:string;
    tamanho:string;
    preco:number;

constructor(sabor:string, tamanho:string, preco:number){
    this.sabor = sabor;
    this.tamanho = tamanho;
    this.preco = preco;
}


getDescricao(): string {
    return `pizza: ${this.sabor} - tamanho: ${this.tamanho} - preco: R$ ${this.preco}`;
}

}


