import { Pharmacy } from "./pharmacy.model";
import { CashOrderProduct } from "./cashorderproduct.model";

export class CashOrder {
    code: string;
    name: string;
    date: Date;
    cashOrderProducts: CashOrderProduct[];
    pharmacy: Pharmacy;
    observations: string;

    constructor() {
    }
}