import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { PharmacyListPage } from '../pages/pharmacy/pharmacy.list.component';
import { PharmacyEditPage } from '../pages/pharmacy/edit/pharmacy.edit.component';

import { LaboratoryListPage } from '../pages/laboratory/laboratory.list.component';
import { LaboratoryEditPage } from '../pages/laboratory/edit/laboratory.edit.component';
import { LaboratorySelectPage } from '../pages/laboratory/select/laboratory.select.page';

import { ProductListPage } from '../pages/product/product.list.component';
import { ProductEditPage } from '../pages/product/edit/product.edit.component';

import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PharmacyService } from '../services/pharmacy.service';
import { LaboratoryService } from '../services/laboratory.service';

import { HttpClientModule } from '@angular/common/http'; 
import { ProductService } from '../services/product.service';

@NgModule({
  declarations: [
    PharmacyListPage,
    PharmacyEditPage,
    LaboratoryListPage,
    LaboratoryEditPage,
    LaboratorySelectPage,
    ProductListPage,
    ProductEditPage,
    MyApp,
    AboutPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    PharmacyListPage,
    PharmacyEditPage,
    LaboratoryListPage,
    LaboratoryEditPage,
    LaboratorySelectPage,
    ProductListPage,
    ProductEditPage,
    MyApp,
    AboutPage,
    TabsPage,
  ],
  providers: [
    PharmacyService,
    LaboratoryService,
    ProductService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
