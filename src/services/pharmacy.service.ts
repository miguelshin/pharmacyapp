import { Injectable } from "@angular/core";
import { Pharmacy } from '../models/pharmacy.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { LoginService } from "./login.service";

@Injectable()
export class PharmacyService {
    BASE_API_URL:string = 'https://pharmacy-app-rest.herokuapp.com/';

    constructor(private http: HttpClient,
        private loginService: LoginService) {
    }
    
    ngOnInit(): void { 
    }

    searchPharmacies(searchText: string): Observable<Pharmacy[]> {
        let token = this.loginService.getToken();
        let headers = new HttpHeaders({
          'Authorization' : 'Bearer ' + token
          });
        
        return this.http.get<Pharmacy[]>(this.BASE_API_URL + 'rest/pharmacy?textName=' + searchText, { headers });
    }
    
    getPharmacies(): Observable<Pharmacy[]> {
        let token = this.loginService.getToken();
        let headers = new HttpHeaders({
          'Authorization' : 'Bearer ' + token
          });
        
        return this.http.get<Pharmacy[]>(this.BASE_API_URL + 'rest/pharmacy', { headers });
    }

    getPharmacy(pharmacyCode: string) {
        let token = this.loginService.getToken();
        let headers = new HttpHeaders({
          'Authorization' : 'Bearer ' + token
          });
        
        return this.http.get<Pharmacy>(this.BASE_API_URL + 'rest/pharmacy/' + pharmacyCode, { headers });
    }

    savePharmacy(pharmacy: Pharmacy) {
        pharmacy.code = null;
        let body = JSON.stringify(pharmacy);
        let token = this.loginService.getToken();
        let headers = new HttpHeaders({
          'Content-Type':'application/json',
          'Authorization' : 'Bearer ' + token
          });
        
        return this.http.post<Pharmacy>(this.BASE_API_URL + 'rest/pharmacy/', body, { headers });
    }

    updatePharmacy(pharmacy: Pharmacy) {
        let body = JSON.stringify(pharmacy);
        let token = this.loginService.getToken();
        let headers = new HttpHeaders({
          'Content-Type':'application/json',
          'Authorization' : 'Bearer ' + token
          });
        
        return this.http.put<Pharmacy>(this.BASE_API_URL + 'rest/pharmacy/', body, { headers });
    }

}