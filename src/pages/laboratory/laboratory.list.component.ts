import { Component, OnInit } from '@angular/core';
import { PharmacyService } from '../../services/pharmacy.service';
import { Pharmacy } from '../../models/pharmacy.model';
import { NavController } from 'ionic-angular';
import { PharmacyEditPage } from './add/pharmacy.edit.component';

@Component({
    selector: 'page-pharmacy-list',
    templateUrl: './pharmacy.list.component.html'
})
export class PharmacyListPage implements OnInit {
    pharmacyList: Pharmacy[];
    
    constructor(public pharmacyService: PharmacyService, private navCtrl: NavController) { }
    
    ngOnInit(): void { }
    
    ionViewWillEnter() {
        this.pharmacyService.getPharmacies().subscribe(data => {
            debugger;
            this.pharmacyList = data;
            //this.pharmacyList = 
        });
    }
    
    selectPharmacy(pharmacy: Pharmacy) {
        var selectedPharmacy = this.pharmacyService
        .getPharmacy(pharmacy.code)
        .subscribe(selectedPharmacy => {
            debugger;
            this.navCtrl.push(PharmacyEditPage, { selectedPharmacy: selectedPharmacy });
        });
    }
    
    goToAddPharmacy() {
        this.navCtrl.push(PharmacyEditPage);
    }
}
