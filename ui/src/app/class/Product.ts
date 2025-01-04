import { Specification } from "./Specification";

export class Product {
    productId: number;
    productName: string;
    productDescription: string;
    productPrice: number;
    productQuantity: number;
    productCategory: string;
    productImages: string[];
    productSpecification: Specification[];

    constructor(productId?: number, productName?: string, productDescription?: string, productPrice?: number, productQuantity?: number, productCategory?: string, productImages?: string[], productSpecification?: Specification[]){
        this.productId = productId || 0;
        this.productName = productName || '';
        this.productDescription = productDescription || '';
        this.productPrice = productPrice || 0;
        this.productQuantity = productQuantity || 0;
        this.productCategory = productCategory || '';
        this.productImages = productImages || [];
        this.productSpecification = productSpecification || [];
    }
}