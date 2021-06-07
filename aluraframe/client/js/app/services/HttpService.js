class HttpService {

    get (url) {

        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest(); //instâcia a classe 
            
            xhr.open('GET', url); //abrindo conxão com o servidor
    
            /* configuralões AJAX */
            xhr.onreadystatechange = () => {
    
                if (xhr.readyState == 4) {
    
                    if (xhr.status == 200) {
    
                       resolve(JSON.parse(xhr.responseText));//transformando Json em Objeto      
                    } else {

                        reject(xhr.responseText);
                    }
                }            
    
            }
    
            xhr.send(); //envia requisiçao de conexão

        });
    }

    post(url, dado) {


        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.onreadystatechange = () => {

                if (xhr.readyState == 4) {

                    if (xhr.status == 200) {

                        resolve(JSON.parse(xhr.responseText));
                    } else {

                        reject(xhr.responseText);
                    }
                }
            };
            xhr.send(JSON.stringify(dado));
        });

    }

}