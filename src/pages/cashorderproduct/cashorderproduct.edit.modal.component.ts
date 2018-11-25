import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, ToastController } from 'ionic-angular';
import * as moment from 'moment';
import { ProductSelectPage } from '../product/select/product.select.page';
import { CashOrderService } from '../../services/cashorder.service';
import { Product } from '../../models';
import { CashOrderProduct } from '../../models/cashorderproduct.model';

@Component({
  selector: 'CashOrderProduct-edit-page-modal',
  templateUrl: 'cashorderproduct.edit.modal.component.html',
})
  export class CashOrderProductEditModalPage {
  
  cashOrderProduct: CashOrderProduct = new CashOrderProduct();

  constructor(public cashOrderService: CashOrderService, public navCtrl: NavController, private navParams: NavParams, public viewCtrl: ViewController, private modalCtrl: ModalController, public toastCtrl: ToastController) {
    let preselectedDate = moment(this.navParams.get('selectedDay')).format();
    debugger;
    this.cashOrderProduct.product = new Product();
  }
  
  cancel() {
    this.viewCtrl.dismiss();
  }
  
  add() {
    this.viewCtrl.dismiss(this.cashOrderProduct);
  }
  
  openProductModal() {
    let modal = this.modalCtrl.create(ProductSelectPage);
    modal.present();
    modal.onDidDismiss(product => {
      if (product) {
        this.cashOrderProduct.product = product;
      }
    });
  }
}