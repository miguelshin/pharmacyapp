import { NgModule, LOCALE_ID, ErrorHandler } from '@angular/core';
import localeES from '@angular/common/locales/es';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, IonicPageModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { PharmacyListPage } from '../pages/pharmacy/pharmacy.list.component';
import { PharmacyEditPage } from '../pages/pharmacy/edit/pharmacy.edit.component';
import { PharmacySelectPage } from '../pages/pharmacy/select/pharmacy.select.page';

import { LaboratoryListPage } from '../pages/laboratory/laboratory.list.component';
import { LaboratoryEditPage } from '../pages/laboratory/edit/laboratory.edit.component';
import { LaboratorySelectPage } from '../pages/laboratory/select/laboratory.select.page';

import { ProductListPage } from '../pages/product/product.list.component';
import { ProductEditPage } from '../pages/product/edit/product.edit.component';
import { ProductSelectPage } from '../pages/product/select/product.select.page';

import { CashOrderListPage } from '../pages/cashorder/cashorder.list.component';
import { CashOrderEditModalPage } from '../pages/cashorder/edit/cashorder.edit.modal.component';
import { CashOrderProductEditModalPage } from '../pages/cashorderproduct/cashorderproduct.edit.modal.component';
import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PharmacyService } from '../services/pharmacy.service';
import { LaboratoryService } from '../services/laboratory.service';

import { HttpClientModule } from '@angular/common/http'; 
import { ProductService } from '../services/product.service';

import { NgCalendarModule  } from 'ionic2-calendar';
import { registerLocaleData } from '@angular/common';
import { CashOrderService } from '../services/cashorder.service';

import { AngularFireModule } from 'angularfire2';

import { AngularFirestoreModule } from 'angularfire2/firestore';

  import { environment } from "../environment/environment";

import { ImagePicker } from '@ionic-native/image-picker';

import { File } from '@ionic-native/file';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { Transfer, TransferObject} from '@ionic-native/transfer';
import firebase from 'firebase';

@NgModule({
  declarations: [
    PharmacyListPage,
    PharmacyEditPage,
    PharmacySelectPage,
    LaboratoryListPage,
    LaboratoryEditPage,
    LaboratorySelectPage,
    ProductListPage,
    ProductEditPage,
    ProductSelectPage,
    CashOrderListPage,
    CashOrderEditModalPage,
    CashOrderProductEditModalPage,
    MyApp,
    AboutPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    NgCalendarModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    PharmacyListPage,
    PharmacyEditPage,
    PharmacySelectPage,
    LaboratoryListPage,
    LaboratoryEditPage,
    LaboratorySelectPage,
    ProductListPage,
    ProductEditPage,
    ProductSelectPage,
    CashOrderListPage,
    CashOrderEditModalPage,
    CashOrderProductEditModalPage,
    MyApp,
    AboutPage,
    TabsPage,
  ],
  providers: [
    PharmacyService,
    LaboratoryService,
    ProductService,
    CashOrderService,
    StatusBar,
    SplashScreen,
    { provide: LOCALE_ID, useValue: 'es-ES' },
    { provide: ErrorHandler, useClass: IonicErrorHandler},
    ImagePicker,
    File,
    Camera,
    Transfer
  ],
})
export class AppModule {}
registerLocaleData(localeES);