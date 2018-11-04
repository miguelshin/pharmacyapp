import { Component, OnInit } from '@angular/core';
import { LaboratoryService } from '../../../services/laboratory.service';
import { Laboratory } from '../../../models/laboratory.model';
import { NavController, NavParams } from 'ionic-angular';
import { LaboratoryEditPage } from '../edit/laboratory.edit.component';

@Component({
    selector: 'page-laboratory-select',
    templateUrl: './laboratory.select.page.html'
})
export class LaboratorySelectPage implements OnInit {
    laboratoryList: Laboratory[];
    searchText: string;
    goToEditProductOnSelectLaboratory;
    
    constructor(public laboratoryService: LaboratoryService, private navCtrl: NavController, private navParams: NavParams) { }
    
    ngOnInit(): void { }
    
    ionViewWillEnter() {
        this.laboratoryService.getLaboratories().subscribe(data => {
            debugger;
            this.laboratoryList = data;
            this.goToEditProductOnSelectLaboratory = this.navParams.get("goToEditProductOnSelectLaboratory")
            //this.LaboratoryList = 
        });
    }
    
    searchLaboratory() {
        debugger;
        this.laboratoryService
        .searchLaboratories(this.searchText)
        .subscribe(laboratories => {
            console.log(laboratories);
            debugger;
            this.laboratoryList = laboratories;
        });
    }

    selectLaboratory(laboratory: Laboratory) {
        debugger;
        this.goToEditLaboratory(laboratory);
    }
    
    goToEditLaboratory(laboratory: Laboratory) {
        this.goToEditProductOnSelectLaboratory(laboratory);
        this.navCtrl.pop();
    }
}
