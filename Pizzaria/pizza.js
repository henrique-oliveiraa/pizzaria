"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pizza = void 0;
var pizza = /** @class */ (function () {
    function pizza(sabor, tamanho, preco) {
        this.sabor = sabor;
        this.tamanho = tamanho;
        this.preco = preco;
    }
    pizza.prototype.getDescricao = function () {
        return "pizza: ".concat(this.sabor, " - tamanho: ").concat(this.tamanho, " - preco: R$ ").concat(this.preco);
    };
    return pizza;
}());
exports.pizza = pizza;
