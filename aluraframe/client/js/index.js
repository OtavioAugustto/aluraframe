// Código foi inutilizado e usado apenas para praticar conceitos básicos

var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

console.log(campos);
var tBody = document.querySelector('table tbody');
//criando tr com as tds contendo os dados dos inputs ao enviar o formulário.
document.querySelector('.form').addEventListener('submit', function(event){
    event.preventDefault();
    var tr = document.createElement('tr');
    campos.forEach(function(campos){    
        
        var td = document.createElement('td');
        td.textContent = campos.value;
        tr.appendChild(td);
    });
    //criando td Volume e adicionando na tr
    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdVolume);

    //adiciona a tr na tabela! 
    tBody.appendChild(tr);

    //apagando os dados dos campos e definindo foco de preenchimento
    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;
    campos[0].focus();
    
});