

var fruits = new Array('Maçã', 'Pêra', 'Banana', 'Manga', 'Limão', 'Amora', 'Framboesa', 'Ameixa', 'Morango', 'Abacaxi');
for (var i = 0; i < fruits.length; i++) {
   console.log(fruits[i]);
}


var fruits: Array<string> = ['Maçã', 'Pêra', 'Banana', 'Manga', 'Limão', 'Amora', 'Framboesa', 'Ameixa', 'Morango', 'Abacaxi']; 

fruits.sort(); 
console.log(fruits); 

console.log(fruits.pop()); 

fruits.push('Mamão'); 
console.log(fruits); 

fruits = fruits.concat(['Acerola', 'Tangerina']); 
console.log(fruits); 

console.log(fruits.indexOf('Mamão'));

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);





// pop()	Remove o último elemento do array e retorna esse elemento
// push()	Adiciona novos elementos ao array e retorna o novo comprimento do array
// sort()	Classifica todos os elementos do array
// concat()	Une dois arrays e retorna o resultado combinado
// indexOf()	Retorna o índice da primeira correspondência de um valor no array (-1 se não for encontrado)
// copyWithin()	Copia uma sequência de elementos dentro do array
// fill()	Preenche a matriz com um valor estático do índice inicial fornecido até o índice final
// shift()	Remove e retorna o primeiro elemento do array
// splice()	Adiciona ou remove elementos do array
// unshift()	Adiciona um ou mais elementos ao início do array
// includes()	Verifica se o array contém um determinado elemento
// join()	Junta todos os elementos do array em uma string
// lastIndexOf()	Retorna o último índice de um elemento do array
// slice()	Extrai uma seção do array e retorna o novo array
// toString()	Retorna uma representação em string do array
// toLocaleString()	Retorna uma string localizada representando o array
