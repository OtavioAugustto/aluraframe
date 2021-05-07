class ListaNegociacoes {
    
    constructor() { 

        this._negociacoes = [];
    }

    adiciona(negociacao) {

        this._negociacoes.push(negociacao);

    }

    get negociacoes() {
        //macete para tornar o array de negociações imutável
        return [].concat(this._negociacoes);

    }
}