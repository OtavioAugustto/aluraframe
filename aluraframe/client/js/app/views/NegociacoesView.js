class NegociaciesView extends View {
    
    constructor(elemento){
        super(elemento); // recebendo da classe pai
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
}
