import { Component } from '@angular/core';
import { NavController, ModalController, AlertController } from 'ionic-angular';
import * as moment from 'moment';
import { CashOrderEditModalPage } from './edit/cashorder.edit.modal.component';
import { CashOrderService } from '../../services/cashorder.service';
 
@Component({
  selector: 'page-cashorder-list',
  templateUrl: 'cashorder.list.component.html'
})
export class CashOrderListPage {
  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();
 
  calendar = {
    mode: 'month',
    currentDate: new Date()
  };
  
  constructor(public cashOrderService: CashOrderService, public navCtrl: NavController, private modalCtrl: ModalController, private alertCtrl: AlertController) { }
 
  addEvent() {
    let modal = this.modalCtrl.create(CashOrderEditModalPage, {selectedDay: this.selectedDay});
    // 
    //this.cashOrderService.getCashOrders // TODO: par cada fecha, poner un event en eventsource con el formato:
    //  event = { startTime: new Date().toISOString(), endTime: new Date().toISOString(), allDay: false };
    modal.present();
    modal.onDidDismiss(data => {
      if (data) {
        let eventData = data;
 
        eventData.startTime = new Date(data.startTime);
        eventData.endTime = new Date(data.endTime);
 
        let events = this.eventSource;
        events.push(eventData);
        this.eventSource = [];
        setTimeout(() => {
          this.eventSource = events;
        });
      }
    });
  }
 
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
 
  onEventSelected(event) {
    let start = moment(event.startTime).format('LLLL');
    let end = moment(event.endTime).format('LLLL');
    
    let alert = this.alertCtrl.create({
      title: '' + event.title,
      subTitle: 'From: ' + start + '<br>To: ' + end,
      buttons: ['OK']
    })
    alert.present();
  }
 
  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTime;
  }
}