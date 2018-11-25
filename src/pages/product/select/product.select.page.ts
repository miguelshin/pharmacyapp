import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product.model';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
        selector: 'page-product-select',
    templateUrl: './product.select.page.html'
})
    export class ProductSelectPage implements OnInit {
    selectedProduct: Product;
    productList: Product[];
    searchText: string;
    
    constructor(public productService: ProductService, private navCtrl: NavController, private navParams: NavParams, public viewCtrl: ViewController) { }
    
    ngOnInit(): void { }
    
    ionViewWillEnter() {
            this.productService.getProducts().subscribe(data => {
            debugger;
            this.productList = data;
        });
    }
    
    searchProducts() {
        debugger;
        this.productService
        .searchProducts(this.searchText)
        .subscribe(pharmacies => {
            console.log(pharmacies);
            debugger;
            this.productList = pharmacies;
        });
    }
    
    selectProduct(product: Product) {
        debugger;
        this.selectedProduct = product;
        this.viewCtrl.dismiss(this.selectedProduct);
    }
    
    cancel() {
        this.viewCtrl.dismiss();
    }
    
}
