import { Component, OnInit } from '@angular/core';
import { LaboratoryService } from '../../../services/laboratory.service';
import { NavController, NavParams } from 'ionic-angular';
import { Laboratory } from '../../../models';
import { ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'page-laboratory-edit',
        templateUrl: './laboratory.edit.component.html'
})
export class LaboratoryEditPage implements OnInit {
    debugger;
    laboratory: Laboratory;
    laboratoryForm: FormGroup;
    constructor(public laboratoryService: LaboratoryService, private navCtrl: NavController, private navParams: NavParams, public toastCtrl: ToastController, public formBuilder: FormBuilder ) { 
        debugger;
        this.laboratoryForm = formBuilder.group({
            name: ['',  Validators.compose([Validators.maxLength(75), Validators.required])],
            address: ['',  Validators.compose([Validators.maxLength(150)])],
            email: ['', Validators.compose([Validators.maxLength(200), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')])],
            phone: ['',  Validators.compose([Validators.maxLength(9)])]
        });
        this.laboratory = this.navParams.get('selectedLaboratory');
        if (!this.laboratory) {
            this.laboratory = new Laboratory();
        }
    }
    
    ngOnInit(): void { }
    
    saveLaboratory(laboratoryToSave: Laboratory) {
        if (!this.laboratoryForm.valid) {
            this.presentSavedLaboratoryToast('No se puede guardar. Revise los campos');
        } else {
            if (laboratoryToSave.code) {
                var selectedLaboratory = this.laboratoryService
                .updateLaboratory(laboratoryToSave)
                .subscribe(savedLaboratory => {
                    this.laboratory = savedLaboratory;
                    this.presentSavedLaboratoryToast('El laboratorio fue guardado con éxito');
                });
            } else {
                var selectedLaboratory = this.laboratoryService
                .saveLaboratory(laboratoryToSave)
                .subscribe(savedLaboratory => {
                    this.laboratory = savedLaboratory;
                    this.presentSavedLaboratoryToast('El laboratorio fue guardado con éxito');
                });
            }
        }
    }
    
    presentSavedLaboratoryToast(message: string) {
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
