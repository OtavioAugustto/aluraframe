class NegociaciesView{

    constructor(elemento){ 
        this._elemento = elemento; //adicionando elemento constructor
    }


    _template(model){ //função que receberá elemento html
        
    return `
        
    <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>

        <tbody>
            ${model.negociacoes.map(n => //percorre a lista e adicionando tds e trs dinamicamente com os dados.
                `
                    <tr>
                        <td>${DateHelper.dataParaTexto(n.data)}</td>
                        <td>${n.quantidade}</td>
                        <td>${n.valor}</td>
                        <td>${n.volume}</td>
                    </tr>
                `
            ).join('')}
        </tbody>

        <tfoot>
                <td colspan="3"></td>
                <td>
                    ${model.negociacoes.reduce((total, n)=> total + n.volume, 0.0)} 
                </td>
                
        </tfoot>
    </table>
    `;
    }

    update(model){
        this._elemento.innerHTML = this._template(model); //inserindo tabela na div da página HTML!
    }
}

/*
*/