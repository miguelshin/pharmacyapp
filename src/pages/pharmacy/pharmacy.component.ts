import { Component, OnInit } from '@angular/core';
import { PharmacyService } from '../../services/pharmacy.service';
import { Pharmacy } from '../../models/pharmacy.model';
import { NavController } from 'ionic-angular';
import { AddPharmacyPage } from '../../pages/pharmacy/add/add.pharmacy.component';

@Component({
    selector: 'page-pharmacy',
    templateUrl: './pharmacy.component.html'
})
export class PharmacyPage implements OnInit {
    constructor(public pharmacyService: PharmacyService,
                private navCtrl: NavController) { }

    pharmacyList: Pharmacy[] = [];

    ngOnInit(): void { 
        this.pharmacyList = this.pharmacyService.getPharmacies();
    }

    selectPharmacy(pharmacy: Pharmacy) {

    }

    goToAddPharmacy() {
        this.navCtrl.push(AddPharmacyPage);
    }
}
