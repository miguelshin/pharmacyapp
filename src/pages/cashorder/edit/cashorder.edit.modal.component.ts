import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, ToastController, normalizeURL } from 'ionic-angular';
import * as moment from 'moment';
import { PharmacySelectPage } from '../../pharmacy/select/pharmacy.select.page';
import { CashOrderService } from '../../../services/cashorder.service';
import { Pharmacy } from '../../../models';
import { CashOrder } from '../../../models/cashorder.model';
import { CashOrderProductEditModalPage } from '../../cashorderproduct/cashorderproduct.edit.modal.component';
import { ImagePicker } from '@ionic-native/image-picker';

@Component({
  selector: 'cashorder-edit-page-modal',
  templateUrl: 'cashorder.edit.modal.component.html',
})
export class CashOrderEditModalPage {
  
  cashOrder: CashOrder = new CashOrder();
  userTimezoneOffset = (new Date()).getTimezoneOffset() * 60000;

  constructor(public cashOrderService: CashOrderService, 
      public navCtrl: NavController, 
      private navParams: NavParams, 
      public viewCtrl: ViewController, 
      private modalCtrl: ModalController, 
      public toastCtrl: ToastController,
      public imagePicker: ImagePicker) {
    let preselectedDate = moment(this.navParams.get('selectedDay')).format();
    let code = this.navParams.get('code');
    debugger;
    if (code) {
      this.getCashOrder(code);
    }
    if (preselectedDate) {
      this.cashOrder.pharmacy = new Pharmacy();
      this.cashOrder.date = new Date((new Date()).getTime() - this.userTimezoneOffset).toISOString();
      this.cashOrder.cashOrderProducts = [];
    }
  }
  
  cancel() {
    this.viewCtrl.dismiss();
  }

  getCashOrder(code: string) {
    this.cashOrderService.getCashOrder(code)
      .subscribe(cashOrder => {
        debugger;
        this.cashOrder = cashOrder;
        this.cashOrder.date = new Date((new Date(this.cashOrder.date)).getTime() - this.userTimezoneOffset).toISOString();
        this.presentSavedCashOrderToast('La cita y pedidos fueron guardados con éxito');
      });
  }

  save() {
    this.cashOrder.date = new Date((new Date(this.cashOrder.date)).getTime() + this.userTimezoneOffset).toISOString();
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

  openImagePicker(){
    this.imagePicker.hasReadPermission()
    .then((result) => {
      if(result == false){
        // no callbacks required as this opens a popup which returns async
        this.imagePicker.requestReadPermission();
      }
      else if(result == true){
        this.imagePicker.getPictures({
          maximumImagesCount: 1
        })
        .then((results) => {
          for (var i = 0; i < results.length; i++) {
            this.uploadImageToFirebase(results[i]);
          }
        }, (err) => console.log(err));
      }
    }, (err) => {
      console.log(err);
    });
  }

  uploadImageToFirebase(image){
    image = normalizeURL(image);
    //uploads img to firebase storage
    this.cashOrderService.uploadImage(image)
    .then(photoURL => {
      let toast = this.toastCtrl.create({
        message: 'Image was updated successfully',
        duration: 3000
      });
    toast.present();
    })
  }
}