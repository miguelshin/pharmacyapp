import { Component, OnInit } from '@angular/core';
import { PharmacyService } from '../../../services/pharmacy.service';
import { NavController } from 'ionic-angular';
import { Pharmacy } from '../../../models';

@Component({
    selector: 'add-pharmacy',
    templateUrl: './add.pharmacy.component.html'
})
export class AddPharmacyPage implements OnInit {
    name: string;
    pharmacy: Pharmacy;
    constructor(public pharmacyService: PharmacyService,
        private navCtrl: NavController) { 
            this.name = 'pepe';
            this.pharmacy = new Pharmacy();
            this.pharmacy.name = 'xD';
        }
        
    ngOnInit(): void { }
    savePharmacy() {
        this.pharmacyService.savePharmacy(this.pharmacy);
    }
}
    