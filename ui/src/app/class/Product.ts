export class Product {
    productName: string;
    productDescription: string;
    productPrice: number;
    productQuantity: number;
    productCategory: string;

    constructor(productName: string, productDescription: string, productPrice: number, productQuantity: number, productCategory: string){
        this.productName = productName;
        this.productDescription = productDescription;
        this.productPrice = productPrice;
        this.productQuantity = productQuantity;
        this.productCategory = productCategory;
    }
}