class NegociacaoController {

    constructor(){
       
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
        
        this._negocioacoesView = new NegociaciesView($('#negociacoesView'));
        this._negocioacoesView.update(this._listaNegociacoes); //carregando tabela na construção da página
        
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);
    }

    adiciona(event){

        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._negocioacoesView.update(this._listaNegociacoes);
        this._mensagem.texto = 'Negociação adicionada com sucesso!';
        this._mensagemView.update(this._mensagem);
        this._limpaForm();

    }

    _criaNegociacao(){
        
        return  new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);

    }

    _limpaForm() {

        this._inputData.value ='';
        this._inputQuantidade.value =1;
        this._inputValor.value = 0.0;
        this._inputData.focus();
    }

    
}