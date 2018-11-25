import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, ToastController } from 'ionic-angular';
import * as moment from 'moment';
import { PharmacySelectPage } from '../../pharmacy/select/pharmacy.select.page';
import { CashOrderService } from '../../../services/cashorder.service';
import { Pharmacy } from '../../../models';
import { CashOrder } from '../../../models/cashorder.model';
import { CashOrderProductEditModalPage } from '../../cashorderproduct/cashorderproduct.edit.modal.component';

@Component({
  selector: 'cashorder-edit-page-modal',
  templateUrl: 'cashorder.edit.modal.component.html',
})
export class CashOrderEditModalPage {
  
  cashOrder: CashOrder = new CashOrder();

  minDate = new Date().toISOString();
  
  constructor(public cashOrderService: CashOrderService, public navCtrl: NavController, private navParams: NavParams, public viewCtrl: ViewController, private modalCtrl: ModalController, public toastCtrl: ToastController) {
    let preselectedDate = moment(this.navParams.get('selectedDay')).format();
    debugger;
    this.cashOrder.pharmacy = new Pharmacy();
    this.cashOrder.date = new Date();
    this.cashOrder.cashOrderProducts = [];
  }
  
  cancel() {
    this.viewCtrl.dismiss();
  }
  
  save() {
    this.cashOrderService.saveCashOrder(this.cashOrder)
      .subscribe(savedCashOrder => {
        this.cashOrder = savedCashOrder;
        this.presentSavedCashOrderToast('La cita y pedidos fueron guardados con éxito');
      });
  }
  
  presentSavedCashOrderToast(message: string) {
    const toast = this.toastCtrl.create({
        message: message,
        duration: 3000,
        position: 'top'
    });
    toast.present();
  }

  openPharmacyModal() {
    let modal = this.modalCtrl.create(PharmacySelectPage);
    modal.present();
    modal.onDidDismiss(pharmacy => {
      if (pharmacy) {
        this.cashOrder.pharmacy = pharmacy;
      }
    });
  }

  openCashOrderProductModal() {
    debugger;
    let modal = this.modalCtrl.create(CashOrderProductEditModalPage);
    modal.present();
    modal.onDidDismiss(cashOrderProduct => {
      debugger;
      if (cashOrderProduct) {
        this.cashOrder.cashOrderProducts.push(cashOrderProduct);
      }
    });
  }

}