import { Injectable, OnInit } from "@angular/core";
import { Product } from '../models/product.model';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ProductService {
    BASE_API_URL:string = 'http://localhost:8080/';
    
    constructor(private http: HttpClient) {
    }
    
    ngOnInit(): void { 
    }

    searchProducts(searchText: string): Observable<Product[]> {
        let headers = new HttpHeaders({
            'Authorization' : 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1NDMwNTExMzgsImlzcyI6Imh0dHBzOi8vd3d3LmF1dGVudGlhLmNvbS8iLCJzdWIiOiJiZW5pdG9taWxsYW5AZ21haWwuY29tIiwiZXhwIjoxNTQzOTE1MTM4fQ.Z6F8aXk6dcqlixa2UJ7qEtoXDMVyctCd4oZNKbNI-9QaTVWhavpgxhBm3DrCUbdqMI00_Sy8ZURt5wZ6zeuCGA'
        });
        
        return this.http.get<Product[]>(this.BASE_API_URL + 'rest/product?textName=' + searchText, { headers });
    }

    getProducts(): Observable<Product[]> {
        var productList: Product[] = [];
        var product1 = {
            'code' : '1',
            'name' : 'product name',
            'address' : 'c/pepe',
            'cif' : '323213'
        }
        var product2 = {
            'code' : '1',
            'name' : 'product name',
            'address' : 'c/pepe',
            'cif' : '323213'
        }
        
        let headers = new HttpHeaders({
            'Authorization' : 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1NDMwNTExMzgsImlzcyI6Imh0dHBzOi8vd3d3LmF1dGVudGlhLmNvbS8iLCJzdWIiOiJiZW5pdG9taWxsYW5AZ21haWwuY29tIiwiZXhwIjoxNTQzOTE1MTM4fQ.Z6F8aXk6dcqlixa2UJ7qEtoXDMVyctCd4oZNKbNI-9QaTVWhavpgxhBm3DrCUbdqMI00_Sy8ZURt5wZ6zeuCGA'
        });
        
        return this.http.get<Product[]>(this.BASE_API_URL + 'rest/product', { headers });
        
        /*productList.push(product1);
        productList.push(product2);
        return productList;*/
    }
    
    getProduct(productCode: string) {
        let headers = new HttpHeaders({
            'Authorization' : 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1NDMwNTExMzgsImlzcyI6Imh0dHBzOi8vd3d3LmF1dGVudGlhLmNvbS8iLCJzdWIiOiJiZW5pdG9taWxsYW5AZ21haWwuY29tIiwiZXhwIjoxNTQzOTE1MTM4fQ.Z6F8aXk6dcqlixa2UJ7qEtoXDMVyctCd4oZNKbNI-9QaTVWhavpgxhBm3DrCUbdqMI00_Sy8ZURt5wZ6zeuCGA'
        });
        
        return this.http.get<Product[]>(this.BASE_API_URL + 'rest/product/' + productCode, { headers });
    }
    
    saveProduct(product: Product) {
        product.code = null;
        let body = JSON.stringify(product);
        let headers = new HttpHeaders({
            'Content-Type':'application/json',
            'Authorization' : 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1NDMwNTExMzgsImlzcyI6Imh0dHBzOi8vd3d3LmF1dGVudGlhLmNvbS8iLCJzdWIiOiJiZW5pdG9taWxsYW5AZ21haWwuY29tIiwiZXhwIjoxNTQzOTE1MTM4fQ.Z6F8aXk6dcqlixa2UJ7qEtoXDMVyctCd4oZNKbNI-9QaTVWhavpgxhBm3DrCUbdqMI00_Sy8ZURt5wZ6zeuCGA'
        });
        
        return this.http.post<Product>(this.BASE_API_URL + 'rest/product/', body, { headers });
    }
    
    updateProduct(product: Product) {
        let body = JSON.stringify(product);
        let headers = new HttpHeaders({
            'Content-Type':'application/json',
            'Authorization' : 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1NDMwNTExMzgsImlzcyI6Imh0dHBzOi8vd3d3LmF1dGVudGlhLmNvbS8iLCJzdWIiOiJiZW5pdG9taWxsYW5AZ21haWwuY29tIiwiZXhwIjoxNTQzOTE1MTM4fQ.Z6F8aXk6dcqlixa2UJ7qEtoXDMVyctCd4oZNKbNI-9QaTVWhavpgxhBm3DrCUbdqMI00_Sy8ZURt5wZ6zeuCGA'
        });
        
        return this.http.put<Product>(this.BASE_API_URL + 'rest/product/', body, { headers });
    }
    
}