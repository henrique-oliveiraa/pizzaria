import { saborPizza } from "./saborPizza";
import { pizza } from "./pizza";

const pizzaCalabresa = new pizza ("calabresa","grande",75.99);
const pizzaAtum = new pizza ("Atum","pequena",55.99);
const pizzaMuçarela = new pizza ("Muçarela","pequeno",35.99);


console.log(pizzaCalabresa.getDescricao());
console.log(pizzaAtum.getDescricao());
console.log(pizzaMuçarela.getDescricao());
