export class Product {
    productId: number;
    productName: string;
    productDescription: string;
    productPrice: number;
    productQuantity: number;
    productCategory: string;
    productImages: string[];

    constructor(productId?: number, productName?: string, productDescription?: string, productPrice?: number, productQuantity?: number, productCategory?: string, productImages?: string[]) {
        this.productId = productId || 0;
        this.productName = productName || '';
        this.productDescription = productDescription || '';
        this.productPrice = productPrice || 0;
        this.productQuantity = productQuantity || 0;
        this.productCategory = productCategory || '';
        this.productImages = productImages || [];
    }
}