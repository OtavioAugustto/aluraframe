class MensagemView extends View {

    constructor(elemento){
        super(elemento); // recebendo da classe pai
    }

    _template(model){
       return model.texto?`<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
    }

}