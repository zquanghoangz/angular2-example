interface IDispatcherService {
    GetBundles() : Array<any>;
}

export class DispatcherService implements IDispatcherService {

    GetBundles() {
        return [1,3];
    }
}

class Context { 
    bundle;
    constructor(private service: IDispatcherService){}
    public GetBundle(): any {
        this.bundle = this.service.GetBundles(); 
    }

    public AccessData() : any { 
        return this.bundle
    }
    
}