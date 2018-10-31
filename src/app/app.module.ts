import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { PharmacyListPage } from '../pages/pharmacy/pharmacy.list.component';
import { PharmacyEditPage } from '../pages/pharmacy/add/pharmacy.edit.component';

import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PharmacyService } from '../services/pharmacy.service';

import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    PharmacyListPage,
    PharmacyEditPage,
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
    MyApp,
    AboutPage,
    TabsPage,
  ],
  providers: [
    PharmacyService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
