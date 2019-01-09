import { Pharmacy } from "./pharmacy.model";
import { CashOrderProduct } from "./cashorderproduct.model";
import { CashOrderImage } from "./cashorderimage.model";

export class CashOrder {
    code: string;
    name: string;
    date: string;
    cashOrderProducts: CashOrderProduct[];
    pharmacy: Pharmacy;
    observations: string;
    cashOrderImages: CashOrderImage[];

    constructor() {
    }
}