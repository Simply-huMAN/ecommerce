export class Specification{
    specificationKey: string;
    specificationValue: string;

    constructor(specificationKey?: string, specificationValue?: string){
        this.specificationKey = specificationKey || '';
        this.specificationValue = specificationValue || '';
    }
}