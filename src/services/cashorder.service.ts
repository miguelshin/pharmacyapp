import { Injectable, OnInit } from "@angular/core";
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
            'Authorization' : 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1NDQyNjU2MzcsImlzcyI6Imh0dHBzOi8vd3d3LmF1dGVudGlhLmNvbS8iLCJzdWIiOiJiZW5pdG9taWxsYW5AZ21haWwuY29tIiwiZXhwIjoxNTQ1MTI5NjM3fQ.axGamv_UTxKHFgjQhtkioOwv0ZtlUNNhqD42oeu9Gf4-clViFkmdJpMd5T-RnmEoZD-YV_fF11t0ShICa_8egA'
        });
        
        return this.http.get<CashOrder[]>(this.BASE_API_URL + 'rest/cashOrder/' + month + "/" + year, { headers });
    }
    
    getCashOrder(cashOrderCode: string): Observable<CashOrder> {
        let headers = new HttpHeaders({
            'Authorization' : 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1NDQyNjU2MzcsImlzcyI6Imh0dHBzOi8vd3d3LmF1dGVudGlhLmNvbS8iLCJzdWIiOiJiZW5pdG9taWxsYW5AZ21haWwuY29tIiwiZXhwIjoxNTQ1MTI5NjM3fQ.axGamv_UTxKHFgjQhtkioOwv0ZtlUNNhqD42oeu9Gf4-clViFkmdJpMd5T-RnmEoZD-YV_fF11t0ShICa_8egA'
        });
        
        return this.http.get<CashOrder>(this.BASE_API_URL + 'rest/cashOrder/' + cashOrderCode, { headers });
    }
    
    saveCashOrder(cashOrder: CashOrder) {
        cashOrder.code = null;
        let body = JSON.stringify(cashOrder);
        let headers = new HttpHeaders({
            'Content-Type':'application/json',
            'Authorization' : 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1NDQyNjU2MzcsImlzcyI6Imh0dHBzOi8vd3d3LmF1dGVudGlhLmNvbS8iLCJzdWIiOiJiZW5pdG9taWxsYW5AZ21haWwuY29tIiwiZXhwIjoxNTQ1MTI5NjM3fQ.axGamv_UTxKHFgjQhtkioOwv0ZtlUNNhqD42oeu9Gf4-clViFkmdJpMd5T-RnmEoZD-YV_fF11t0ShICa_8egA'
        });
        
        return this.http.post<CashOrder>(this.BASE_API_URL + 'rest/cashOrder/', body, { headers });
    }
    
    updateCashOrder(cashOrder: CashOrder) {
        let body = JSON.stringify(cashOrder);
        let headers = new HttpHeaders({
            'Content-Type':'application/json',
            'Authorization' : 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1NDQyNjU2MzcsImlzcyI6Imh0dHBzOi8vd3d3LmF1dGVudGlhLmNvbS8iLCJzdWIiOiJiZW5pdG9taWxsYW5AZ21haWwuY29tIiwiZXhwIjoxNTQ1MTI5NjM3fQ.axGamv_UTxKHFgjQhtkioOwv0ZtlUNNhqD42oeu9Gf4-clViFkmdJpMd5T-RnmEoZD-YV_fF11t0ShICa_8egA'
        });
        
        return this.http.put<CashOrder>(this.BASE_API_URL + 'rest/cashOrder/', body, { headers });
    }
    
}