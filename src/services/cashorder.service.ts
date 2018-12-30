import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { CashOrder } from "../models/cashorder.model";
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import  firebase from 'firebase';
import { AngularFireModule } from "angularfire2";
import { environment } from "../environment/environment";
AngularFireModule
@Injectable()
export class CashOrderService {
    BASE_API_URL:string = 'https://pharmacy-app-rest.herokuapp.com/';
    
    constructor(private http: HttpClient, 
        private angularFireModule: AngularFireModule    ) {
            firebase.initializeApp(environment.firebase)
    }
    
    ngOnInit(): void { 
    }
    
    getCashOrders(month, year): Observable<CashOrder[]> {
        let headers = new HttpHeaders({
            'Authorization' : 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1NDU4NDIwMjIsImlzcyI6Imh0dHBzOi8vd3d3LmF1dGVudGlhLmNvbS8iLCJzdWIiOiJiZW5pdG9taWxsYW5AZ21haWwuY29tIiwiZXhwIjoxNTQ2NzA2MDIyfQ.bQYnf82vTANJBgWFsfRnH2yJ2IgrTS6g4Fq3LUhIasgTVcaE5eezy4Fgji0W8BrgEbWflXIMjAyz7WQzBp4Ppw'
        });
        
        return this.http.get<CashOrder[]>(this.BASE_API_URL + 'rest/cashOrder/' + month + "/" + year, { headers });
    }
    
    getCashOrder(cashOrderCode: string): Observable<CashOrder> {
        let headers = new HttpHeaders({
            'Authorization' : 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1NDU4NDIwMjIsImlzcyI6Imh0dHBzOi8vd3d3LmF1dGVudGlhLmNvbS8iLCJzdWIiOiJiZW5pdG9taWxsYW5AZ21haWwuY29tIiwiZXhwIjoxNTQ2NzA2MDIyfQ.bQYnf82vTANJBgWFsfRnH2yJ2IgrTS6g4Fq3LUhIasgTVcaE5eezy4Fgji0W8BrgEbWflXIMjAyz7WQzBp4Ppw'
        });
        
        return this.http.get<CashOrder>(this.BASE_API_URL + 'rest/cashOrder/' + cashOrderCode, { headers });
    }
    
    saveCashOrder(cashOrder: CashOrder) {
        cashOrder.code = null;
        let body = JSON.stringify(cashOrder);
        let headers = new HttpHeaders({
            'Content-Type':'application/json',
            'Authorization' : 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1NDU4NDIwMjIsImlzcyI6Imh0dHBzOi8vd3d3LmF1dGVudGlhLmNvbS8iLCJzdWIiOiJiZW5pdG9taWxsYW5AZ21haWwuY29tIiwiZXhwIjoxNTQ2NzA2MDIyfQ.bQYnf82vTANJBgWFsfRnH2yJ2IgrTS6g4Fq3LUhIasgTVcaE5eezy4Fgji0W8BrgEbWflXIMjAyz7WQzBp4Ppw'
        });
        
        return this.http.post<CashOrder>(this.BASE_API_URL + 'rest/cashOrder/', body, { headers });
    }
    
    updateCashOrder(cashOrder: CashOrder) {
        let body = JSON.stringify(cashOrder);
        let headers = new HttpHeaders({
            'Content-Type':'application/json',
            'Authorization' : 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1NDU4NDIwMjIsImlzcyI6Imh0dHBzOi8vd3d3LmF1dGVudGlhLmNvbS8iLCJzdWIiOiJiZW5pdG9taWxsYW5AZ21haWwuY29tIiwiZXhwIjoxNTQ2NzA2MDIyfQ.bQYnf82vTANJBgWFsfRnH2yJ2IgrTS6g4Fq3LUhIasgTVcaE5eezy4Fgji0W8BrgEbWflXIMjAyz7WQzBp4Ppw'
        });
        
        return this.http.put<CashOrder>(this.BASE_API_URL + 'rest/cashOrder/', body, { headers });
    }
    
    uploadImage(imageURI){
        return new Promise<any>((resolve, reject) => {
            let storageRef = firebase.storage().ref();
            let imageRef = storageRef.child('image');
            this.encodeImageUri(imageURI, function(image64){
                imageRef.putString(image64, 'data_url')
                .then(snapshot => {
                    resolve(snapshot.downloadURL)
                }, err => {
                    reject(err);
                })
            })
        })
    }
    
    encodeImageUri(imageUri, callback) {
        var c = document.createElement('canvas');
        var ctx = c.getContext("2d");
        var img = new Image();
        img.onload = function () {
            var aux:any = this;
            c.width = aux.width;
            c.height = aux.height;
            ctx.drawImage(img, 0, 0);
            var dataURL = c.toDataURL("image/jpeg");
            callback(dataURL);
        };
        img.src = imageUri;
    }
}