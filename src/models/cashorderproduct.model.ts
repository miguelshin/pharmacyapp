import { Pharmacy } from "./pharmacy.model";
import { Product } from "./product.model";

export class CashOrderProduct {
    product: Product;
    quantity: number;
    amount: number;
    constructor() {
    }
}