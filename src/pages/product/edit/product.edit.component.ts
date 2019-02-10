import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { NavController, NavParams } from 'ionic-angular';
import { Product, Laboratory } from '../../../models';
import { ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LaboratorySelectPage } from '../../laboratory/select/laboratory.select.page';

@Component({
    selector: 'page-product-edit',
    templateUrl: './product.edit.component.html'
})
export class ProductEditPage implements OnInit {
    product: Product;
    productForm: FormGroup;
    constructor(public productService: ProductService, private navCtrl: NavController, private navParams: NavParams, public toastCtrl: ToastController, public formBuilder: FormBuilder ) { 
        this.productForm = formBuilder.group({
            name: ['',  Validators.compose([Validators.maxLength(150)])],
            product: ['',  Validators.compose([Validators.maxLength(36)])]
        });
        this.product = this.navParams.get('selectedProduct');
        if (!this.product) {
            this.product = new Product();
            this.product.laboratory = new Laboratory();
        }
    }
    
    ngOnInit(): void { }
    
    saveProduct(productToSave: Product) {
        if (!this.productForm.valid) {
            this.presentSavedProductToast('No se puede guardar. Revise los campos');
        } else {
            if (productToSave.code) {
                this.productService
                .updateProduct(productToSave)
                .subscribe(savedProduct => {
                    this.product = savedProduct;
                    this.presentSavedProductToast('El producto fue guardado con éxito');
                });
            } else {
                this.productService
                .saveProduct(productToSave)
                .subscribe(savedProduct => {
                    this.product = savedProduct;
                    this.presentSavedProductToast('El producto fue guardado con éxito');
                });
            }
        }
    }
    
    presentSavedProductToast(message: string) {
        const toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    }
    
    goBack() {
        this.navCtrl.pop();
    }
    
    getParamFromLaboratorySelect = (laboratory) => {
        this.product.laboratory.code = laboratory.code;
        this.product.laboratory.name = laboratory.name;
    };

    goToLaboratorySelect() {
        this.navCtrl.push(LaboratorySelectPage, {
            goToEditProductOnSelectLaboratory: this.getParamFromLaboratorySelect
        });
    }
}
