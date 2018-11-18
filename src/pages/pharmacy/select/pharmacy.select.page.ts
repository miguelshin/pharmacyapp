import { Component, OnInit } from '@angular/core';
import { PharmacyService } from '../../../services/pharmacy.service';
import { Pharmacy } from '../../../models/pharmacy.model';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { PharmacyEditPage } from '../edit/pharmacy.edit.component';

@Component({
    selector: 'page-pharmacy-select',
    templateUrl: './pharmacy.select.page.html'
})
export class PharmacySelectPage implements OnInit {
    selectedPharmacy: Pharmacy;
    pharmacyList: Pharmacy[];
    searchText: string;
    
    constructor(public pharmacyService: PharmacyService, private navCtrl: NavController, private navParams: NavParams, public viewCtrl: ViewController) { }
    
    ngOnInit(): void { }
    
    ionViewWillEnter() {
        this.pharmacyService.getPharmacies().subscribe(data => {
            debugger;
            this.pharmacyList = data;
        });
    }
    
    searchPharmacy() {
        debugger;
        this.pharmacyService
        .searchPharmacies(this.searchText)
        .subscribe(pharmacies => {
            console.log(pharmacies);
            debugger;
            this.pharmacyList = pharmacies;
        });
    }
    
    selectPharmacy(pharmacy: Pharmacy) {
        debugger;
        this.selectedPharmacy = pharmacy;
        this.viewCtrl.dismiss(this.selectedPharmacy);
    }
    
    cancel() {
        this.viewCtrl.dismiss();
    }
    
}
