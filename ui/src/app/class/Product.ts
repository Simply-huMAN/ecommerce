import { Specification } from "./Specification";

export interface Product {
    id: string;
    productName: string;
    productDescription: string;
    productPrice: number;
    productQuantity: number;
    productCategory: string;
    productImages: string[];
    productSpecification: Specification[];
}