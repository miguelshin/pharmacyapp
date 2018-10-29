import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { PharmacyPage } from '../pages/pharmacy/pharmacy.component';
import { AddPharmacyPage } from '../pages/pharmacy/add/add.pharmacy.component';

import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PharmacyService } from '../services/pharmacy.service';

@NgModule({
  declarations: [
    PharmacyPage,
    AddPharmacyPage,
    MyApp,
    AboutPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    PharmacyPage,
    AddPharmacyPage,
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
