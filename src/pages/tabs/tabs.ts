import { Component } from '@angular/core';

import { PharmacyListPage } from '../pharmacy/pharmacy.list.component';
import { LaboratoryListPage } from '../laboratory/laboratory.list.component';

import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PharmacyListPage;
  tab2Root = LaboratoryListPage;
  tab3Root = AboutPage;

  constructor() {

  }
}
