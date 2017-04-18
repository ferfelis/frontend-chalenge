/*
referências:
https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data

*/

{
function createNode(element) {
	return document.createElement(element);
}

function append(parent, el) {
	return parent.appendChild(el);
}

const ul = document.getElementById('lista');
const urlBase = 'http://swapi.co/api/';
const urlPeople = urlBase+'people/';


fetch(urlPeople)
.then((resp) => resp.json())
.then(function(data) {
	let personagens = data.results;//pega resultados
	i = 0;
	return personagens.map(function(personagem) {
		i++;//conta personagens
		
		let li = createNode('li'),//cria lis
		span = createNode('span');
		param = createNode('a');
		block = createNode('div');

		li.innerHTML = `${personagem.name}`; //coloca dados no div
		block.innerHTML = `${personagem.birth_year}`; //coloca dados no div
		param.innerHTML = `${i}`;


		append(li, block); //div dentro da li
		append(li, param); //passando parametro para busca dos dados dentro da li
		append(document.getElementById('lista'), li);
		//console.log(${personagem.name});
		
	})


})
.catch(function(error) {
	console.log(error);
});   
}

