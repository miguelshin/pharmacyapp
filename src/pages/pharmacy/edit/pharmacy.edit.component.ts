import { Component, OnInit } from '@angular/core';
import { PharmacyService } from '../../../services/pharmacy.service';
import { NavController, NavParams } from 'ionic-angular';
import { Pharmacy } from '../../../models';
import { ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'page-pharmacy-edit',
    templateUrl: './pharmacy.edit.component.html'
})
export class PharmacyEditPage implements OnInit {
    pharmacy: Pharmacy;
    pharmacyForm: FormGroup;
    constructor(public pharmacyService: PharmacyService, private navCtrl: NavController, private navParams: NavParams, public toastCtrl: ToastController, public formBuilder: FormBuilder ) { 
        debugger;
        this.pharmacyForm = formBuilder.group({
            name: ['',  Validators.compose([Validators.maxLength(75), Validators.required])],
            address: ['',  Validators.compose([Validators.maxLength(150)])],
            cif: ['',  Validators.compose([Validators.maxLength(9)])],
            email: ['', Validators.compose([Validators.maxLength(200), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')])],
            phone: ['',  Validators.compose([Validators.maxLength(9)])]
        });
        this.pharmacy = this.navParams.get('selectedPharmacy');
        if (!this.pharmacy) {
            this.pharmacy = new Pharmacy();
        }
    }
    
    ngOnInit(): void { }
    
    savePharmacy(pharmacyToSave: Pharmacy) {
        if (!this.pharmacyForm.valid) {
            this.presentSavedPharmacyToast('No se puede guardar. Revise los campos');
        } else {
            if (pharmacyToSave.code) {
                var selectedPharmacy = this.pharmacyService
                .updatePharmacy(pharmacyToSave)
                .subscribe(savedPharmacy => {
                    this.pharmacy = savedPharmacy;
                    this.presentSavedPharmacyToast('La farmacia fue guardada con éxito');
                });
            } else {
                var selectedPharmacy = this.pharmacyService
                .savePharmacy(pharmacyToSave)
                .subscribe(savedPharmacy => {
                    this.pharmacy = savedPharmacy;
                    this.presentSavedPharmacyToast('La farmacia fue guardada con éxito');
                });
            }
        }
    }
    
    presentSavedPharmacyToast(message: string) {
        const toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    }
    
    goBack() {
        this.navCtrl.pop();
    }
}
