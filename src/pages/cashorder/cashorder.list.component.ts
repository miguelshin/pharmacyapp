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
  
  ionViewWillEnter() {
    this.eventSource = [];
    let month = (new Date()).getMonth();
    this.cashOrderService.getCashOrders(month, 2018).subscribe(cashOrders => {
      debugger;
      let events = this.eventSource;
      cashOrders.forEach(cashOrder => {
        let date = new Date(cashOrder.date);
        let eventData = {
          code: cashOrder.code,
          title: cashOrder.pharmacy.name,
          startTime: date,
          endTime: date,
          allDay: false
        };
        events.push(eventData);
        this.eventSource = [];
        
        setTimeout(() => {
          this.eventSource = events;
        });
      });
    });
  }
  
  goToAddCashOrder() {
    let modal = this.modalCtrl.create(CashOrderEditModalPage, {selectedDay: this.selectedDay});
    // 
    //this.cashOrderService.getCashOrders // TODO: par cada fecha, poner un event en eventsource con el formato:
    //  event = { startTime: new Date().toISOString(), endTime: new Date().toISOString(), allDay: false };
    modal.present();
    modal.onDidDismiss(cashOrder => {
      this.ionViewWillEnter();
    });
  }
  
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
  
  onEventSelected(event) {
    let date = new Date(event.startTime);
    let hoursOffset = (new Date(event.startTime)).getTimezoneOffset() / 60;
    date.setHours(event.startTime.getHours() + hoursOffset);

    let start = moment(date).format('LLLL');
    let end = moment(date).format('LLLL');
    
    /*let alert = this.alertCtrl.create({
      title: '' + event.title,
      subTitle: 'From: ' + start + '<br>To: ' + end,
      buttons: ['OK']
    })
    alert.present();*/
    this.goToEditCashOrder(event.code);
  }

  goToEditCashOrder(cashOrderCode: string) {
    let modal = this.modalCtrl.create(CashOrderEditModalPage, {code: cashOrderCode});
    // 
    //this.cashOrderService.getCashOrders // TODO: par cada fecha, poner un event en eventsource con el formato:
    //  event = { startTime: new Date().toISOString(), endTime: new Date().toISOString(), allDay: false };
    modal.present();
    modal.onDidDismiss(cashOrder => {
      this.ionViewWillEnter();
    });
  }


  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTime;
  }
}