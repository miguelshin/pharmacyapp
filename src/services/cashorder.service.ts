import { Injectable, OnInit } from "@angular/core";
import { CashOrder } from '../models/cashOrder.model';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { CashOrder } from "../models/cashorder.model";

@Injectable()
export class CashOrderService {
    BASE_API_URL:string = 'http://localhost:8080/';
    
    constructor(private http: HttpClient) {
    }
    
    ngOnInit(): void { 
    }
    
    getCashOrders(month, year): Observable<CashOrder[]> {
        let headers = new HttpHeaders({
            'Authorization' : 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1NDE4MzcyMTcsImlzcyI6Imh0dHBzOi8vd3d3LmF1dGVudGlhLmNvbS8iLCJzdWIiOiJiZW5pdG9taWxsYW5AZ21haWwuY29tIiwiZXhwIjoxNTQyNzAxMjE3fQ.vzjfStAnhJildQWBxXl9FDQrF3xsRZo5ITuRLNrfrH581DIMeXI9fCbONEn6FOeawd0wElHhSL3hy2iULeazGw'
        });
        
        return this.http.get<CashOrder[]>(this.BASE_API_URL + 'rest/cashOrder/' + month + "/" + year, { headers });
    }
    
    getCashOrder(cashOrderCode: string) {
        let headers = new HttpHeaders({
            'Authorization' : 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1NDE4MzcyMTcsImlzcyI6Imh0dHBzOi8vd3d3LmF1dGVudGlhLmNvbS8iLCJzdWIiOiJiZW5pdG9taWxsYW5AZ21haWwuY29tIiwiZXhwIjoxNTQyNzAxMjE3fQ.vzjfStAnhJildQWBxXl9FDQrF3xsRZo5ITuRLNrfrH581DIMeXI9fCbONEn6FOeawd0wElHhSL3hy2iULeazGw'
        });
        
        return this.http.get<CashOrder[]>(this.BASE_API_URL + 'rest/cashOrder/' + cashOrderCode, { headers });
    }
    
    saveCashOrder(cashOrder: CashOrder) {
        cashOrder.code = null;
        let body = JSON.stringify(cashOrder);
        let headers = new HttpHeaders({
            'Content-Type':'application/json',
            'Authorization' : 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1NDE4MzcyMTcsImlzcyI6Imh0dHBzOi8vd3d3LmF1dGVudGlhLmNvbS8iLCJzdWIiOiJiZW5pdG9taWxsYW5AZ21haWwuY29tIiwiZXhwIjoxNTQyNzAxMjE3fQ.vzjfStAnhJildQWBxXl9FDQrF3xsRZo5ITuRLNrfrH581DIMeXI9fCbONEn6FOeawd0wElHhSL3hy2iULeazGw'
        });
        
        return this.http.post<CashOrder>(this.BASE_API_URL + 'rest/cashOrder/', body, { headers });
    }
    
    updateCashOrder(cashOrder: CashOrder) {
        let body = JSON.stringify(cashOrder);
        let headers = new HttpHeaders({
            'Content-Type':'application/json',
            'Authorization' : 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1NDE4MzcyMTcsImlzcyI6Imh0dHBzOi8vd3d3LmF1dGVudGlhLmNvbS8iLCJzdWIiOiJiZW5pdG9taWxsYW5AZ21haWwuY29tIiwiZXhwIjoxNTQyNzAxMjE3fQ.vzjfStAnhJildQWBxXl9FDQrF3xsRZo5ITuRLNrfrH581DIMeXI9fCbONEn6FOeawd0wElHhSL3hy2iULeazGw'
        });
        
        return this.http.put<CashOrder>(this.BASE_API_URL + 'rest/cashOrder/', body, { headers });
    }
    
}