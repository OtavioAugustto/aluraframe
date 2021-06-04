class Bind {
    constructor(model, view, ...props){

        let proxy = ProxyFactory.create(model, view, props, model =>
            view.update(model));

        view.update(model);
        return proxy;
    }

    
}