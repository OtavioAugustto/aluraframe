class ListaNegociacoes {
    
    constructor() { // evitar que precise chamar o uptade toda hora 

        this._negociacoes = [];
    }

    adiciona(negociacao) {

        this._negociacoes = [].concat(this._negociacoes, negociacao);
        // this._negociacoes.push(negociacao);
    }

    get negociacoes() {
        //macete para tornar o array de negociações imutável
        return [].concat(this._negociacoes);

    }

    esvazia(){

        this._negociacoes = [];
    }

}