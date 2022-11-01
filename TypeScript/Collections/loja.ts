//Criei um array apartir da variável estoque.
// Dentro desse array há itens de um estoque de uma loja de roupa.


let estoque: string[] = []

// Populando uma Array
estoque.push('Blusa', 'Camiseta', 'Calça', 'Gorro', 'Cinto')


estoque.forEach(estoque => console.log(estoque));
console.log(estoque);
estoque.splice(2, 3);
console.log(estoque);
estoque.splice(0, 1, "Tênis");
console.log(estoque);





