class NegociacaoController {

    constructor(){
       
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

    }

    adiciona(event){

        event.preventDefault();

        let data = new Date(...
            this._inputData.value.split('-')
            // decrementando o mês usando mod de 2.  
            .map((item, i) => item - i % 2)//mod de 2 é 1, que indica a segunda posição do array
            // desta forma resolvemos problema com a data de forma simples!
        );

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao);

    }
    
}