// PARA SELECIONAR OS ITENS :

const calcular = document.getElementById('calcular');


function imc () {
const nome = document.getElementById('nome').value;
const altura = document.getElementById('altura').value;
const peso = document.getElementById('peso').value;
const leitura = document.getElementById('leitura-imc');


if (nome !== '' && altura !== '' && peso !== '') {
    const valorIMC = (peso / (altura * altura));

 leitura.textContent = valorIMC;

}else {
   leitura.textContent = 'Por Favor, Preencha todos os campos';
}

}
calcular.addEventListener('click', imc);


