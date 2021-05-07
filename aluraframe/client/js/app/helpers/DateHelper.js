class DateHelper {
    
    constructor(){

        throw new Error('Esta não pode ser instanciada');
    }

    static dataParaTexto(data){
        //concatenação com template string interpolação!     
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
        
    }

    static textoParaData(texto){
        //expressão regular para datas no formato ano-mes-dia!
        if(!/^\d{4}-\d{2}-\d{2}$/.test(texto)) // irá lançar o erro caso a data não esteja no formato exigido!  
            throw new Error('Deve estar no ano aaaa-mm-dd')
        
        return new Date(... texto.split('-')
            // decrementando o mês usando mod de 2.  
            .map((item, i) => item - i % 2))//mod de 2 é 1, que indica a segunda posição do array
            // desta forma resolvemos problema com a data de forma simples!
    }
}