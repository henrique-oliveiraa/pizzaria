"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pizza_1 = require("./pizza");
var pizzaCalabresa = new pizza_1.pizza("calabresa", "grande", 75.99);
var pizzaAtum = new pizza_1.pizza("Atum", "pequena", 55.99);
var pizzaMuçarela = new pizza_1.pizza("Muçarela", "pequeno", 35.99);
console.log(pizzaCalabresa.getDescricao());
console.log(pizzaAtum.getDescricao());
console.log(pizzaMuçarela.getDescricao());
