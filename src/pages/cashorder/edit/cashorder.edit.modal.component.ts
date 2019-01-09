import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, ToastController, normalizeURL } from 'ionic-angular';
import * as moment from 'moment';
import { PharmacySelectPage } from '../../pharmacy/select/pharmacy.select.page';
import { CashOrderService } from '../../../services/cashorder.service';
import { Pharmacy } from '../../../models';
import { CashOrder } from '../../../models/cashorder.model';
import { CashOrderProductEditModalPage } from '../../cashorderproduct/cashorderproduct.edit.modal.component';
import { ImagePicker } from '@ionic-native/image-picker';
import { CashOrderProduct } from '../../../models/cashorderproduct.model';

@Component({
  selector: 'cashorder-edit-page-modal',
  templateUrl: 'cashorder.edit.modal.component.html',
})
export class CashOrderEditModalPage {
  
  cashOrder: CashOrder = new CashOrder();

  userTimezoneOffset = (new Date()).getTimezoneOffset() * 60000;
  selectedImg: any;
  
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
        this.cashOrder.cashOrderImages = [];
      }

      this.selectedImg = null;
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
    
    openCashOrderProductModal(cashOrderProduct) {
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
      this.cashOrderService.pickImage().then((uploadedImage) => {
        debugger;
        if (uploadedImage) {
          alert(uploadedImage + "XDD");
          this.cashOrder.cashOrderImages.push(uploadedImage);
        }
      });
    debugger;
  }

  openImage(url) {
    debugger;
    this.selectedImg = url;
  }

  closeImage() {
    this.selectedImg = null;
  }
}