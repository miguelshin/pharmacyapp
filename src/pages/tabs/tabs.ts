import { Component } from '@angular/core';

import { PharmacyPage } from '../pharmacy/pharmacy.component';
import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PharmacyPage;
  tab2Root = AboutPage;

  constructor() {

  }
}
