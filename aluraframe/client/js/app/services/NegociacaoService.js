class NegociacaoService {
    
    obterNegociacoesDaSemana(cb){

        let xhr = new XMLHttpRequest(); //instâcia a classe 
        
        xhr.open('GET', 'negociacoes/semana'); //abrindo conxão com o servidor

        /* configuralões AJAX */
        xhr.onreadystatechange = () => {

            if (xhr.readyState == 4) {

                if (xhr.status == 200) {

                   cb(null, JSON.parse(xhr.responseText) //transformando Json em Objeto
                    .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))); //acessando as propiedades de cada item do objeto
                 
                    
                                  
                } else {

                    console.log(xhr.responseText);
                    cb('Não foi possível obter as negociações!', null)
                   
                }
            }            

        }

        xhr.send(); //envia requisiçao de conexão
    }
}