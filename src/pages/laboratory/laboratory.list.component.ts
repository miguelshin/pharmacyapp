import { Component, OnInit } from '@angular/core';
import { LaboratoryService } from '../../services/laboratory.service';
import { Laboratory } from '../../models/laboratory.model';
import { NavController } from 'ionic-angular';
    import { LaboratoryEditPage } from './edit/laboratory.edit.component';

@Component({
    selector: 'page-laboratory-list',
    templateUrl: './laboratory.list.component.html'
})
export class LaboratoryListPage implements OnInit {
    laboratoryList: Laboratory[];
    
    constructor(public laboratoryService: LaboratoryService, private navCtrl: NavController) { }
    
    ngOnInit(): void { }
    
    ionViewWillEnter() {
        this.laboratoryService.getLaboratories().subscribe(data => {
            this.laboratoryList = data;
            //this.LaboratoryList = 
        });
    }
    
    selectLaboratory(laboratory: Laboratory) {
        this.laboratoryService
        .getLaboratory(laboratory.code)
        .subscribe(selectedLaboratory => {
            this.navCtrl.push(LaboratoryEditPage, { selectedLaboratory: selectedLaboratory });
        });
    }
    
    goToAddLaboratory() {
        this.navCtrl.push(LaboratoryEditPage);
    }
}
