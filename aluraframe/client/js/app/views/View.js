class View {

    constructor(elemento){
        this._elemento = elemento;
    }

    _template(){
        throw new Error('O Método template deve ser Implementado');
    }

    update(model){
        this._elemento.innerHTML = this._template(model);
    }
}