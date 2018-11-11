import { Component } from '@angular/core';

import { PharmacyListPage } from '../pharmacy/pharmacy.list.component';
import { LaboratoryListPage } from '../laboratory/laboratory.list.component';
import { ProductListPage } from '../product/product.list.component';

import { AboutPage } from '../about/about';
import { CashOrderListPage } from '../cashorder/cashorder.list.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PharmacyListPage;
  tab2Root = LaboratoryListPage;
  tab3Root = ProductListPage;
  tab4Root = CashOrderListPage
  tab5Root = AboutPage;

  constructor() {

  }
}
