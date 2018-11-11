import { Pharmacy } from "./pharmacy.model";

export class CashOrder {
    code: string;
    name: string;
    date: Date;
    //cashorderproducts // TODO
    pharmacy: Pharmacy;
    observations: string;

    constructor() {
    }
}