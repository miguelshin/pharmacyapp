import { Injectable, OnInit } from "@angular/core";
import { Pharmacy } from '../models/pharmacy.model';

@Injectable()
export class PharmacyService {
    constructor() {

    }

    ngOnInit(): void { 

    }

    getPharmacies() : Pharmacy[] {
        var pharmacyList: Pharmacy[] = [];
        var pharmacy1 = {
            'code' : '1',
            'name' : 'pharmacy name',
            'address' : 'c/pepe',
            'cif' : '323213'
        }
        var pharmacy2 = {
            'code' : '1',
            'name' : 'pharmacy name',
            'address' : 'c/pepe',
            'cif' : '323213'
        }
  
        pharmacyList.push(pharmacy1);
        pharmacyList.push(pharmacy2);
        return pharmacyList;
    }

    savePharmacy(pharmacy: Pharmacy) {
        console.log(pharmacy);
    }

}