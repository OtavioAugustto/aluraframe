class ListaNegociacoes {
    
    constructor(armadilha) { // evitar que precise chamar o uptade toda hora 

        this._negociacoes = [];
        this._armadilha = armadilha;
    }

    adiciona(negociacao) {

        this._negociacoes.push(negociacao);
        this._armadilha(this);

    }

    get negociacoes() {
        //macete para tornar o array de negociações imutável
        return [].concat(this._negociacoes);

    }

    esvazia(){

        this._negociacoes = [];
        this._armadilha(this);

    }

}