import { Component, OnInit } from '@angular/core';
    import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { NavController } from 'ionic-angular';
import { ProductEditPage } from './edit/product.edit.component';

@Component({
    selector: 'page-product-list',
    templateUrl: './product.list.component.html'
})
export class ProductListPage implements OnInit {
    productList: Product[];
    
    constructor(public productService: ProductService, private navCtrl: NavController) { }
    
    ngOnInit(): void { }
    
    ionViewWillEnter() {
        this.productService.getProducts().subscribe(data => {
            debugger;
            this.productList = data;
            //this.ProductList = 
        });
    }
    
    selectProduct(product: Product) {
        this.productService
        .getProduct(product.code)
        .subscribe(selectedProduct => {
            debugger;
            this.navCtrl.push(ProductEditPage, { selectedProduct: selectedProduct });
        });
    }
    
    goToAddProduct() {
        this.navCtrl.push(ProductEditPage);
    }
}
