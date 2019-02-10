import { Injectable } from "@angular/core";
import { Product } from '../models/product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { LoginService } from "./login.service";

@Injectable()
export class ProductService {
    BASE_API_URL:string = 'https://pharmacy-app-rest.herokuapp.com/';
    
    constructor(private http: HttpClient,
        private loginService: LoginService) {
    }
    
    ngOnInit(): void { 
    }

    searchProducts(searchText: string): Observable<Product[]> {
        let token = this.loginService.getToken();
        let headers = new HttpHeaders({
          'Authorization' : 'Bearer ' + token
            });
        
        return this.http.get<Product[]>(this.BASE_API_URL + 'rest/product?textName=' + searchText, { headers });
    }

    getProducts(): Observable<Product[]> {
        let token = this.loginService.getToken();
        let headers = new HttpHeaders({
          'Content-Type':'application/json',
          'Authorization' : 'Bearer ' + token
          });
        
        return this.http.get<Product[]>(this.BASE_API_URL + 'rest/product', { headers });
    }
    
    getProduct(productCode: string) {
        let token = this.loginService.getToken();
        let headers = new HttpHeaders({
          'Authorization' : 'Bearer ' + token
          });
        
        return this.http.get<Product[]>(this.BASE_API_URL + 'rest/product/' + productCode, { headers });
    }
    
    saveProduct(product: Product) {
        product.code = null;
        let body = JSON.stringify(product);
        let token = this.loginService.getToken();
        let headers = new HttpHeaders({
          'Content-Type':'application/json',
          'Authorization' : 'Bearer ' + token
          });
        
        return this.http.post<Product>(this.BASE_API_URL + 'rest/product/', body, { headers });
    }
    
    updateProduct(product: Product) {
        let body = JSON.stringify(product);
        let token = this.loginService.getToken();
        let headers = new HttpHeaders({
          'Content-Type':'application/json',
          'Authorization' : 'Bearer ' + token
          });
        
        return this.http.put<Product>(this.BASE_API_URL + 'rest/product/', body, { headers });
    }
    
}