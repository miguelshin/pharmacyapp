import { Injectable } from "@angular/core";
import { Laboratory } from '../models/laboratory.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { LoginService } from "./login.service";

@Injectable()
export class LaboratoryService {
    BASE_API_URL:string = 'https://pharmacy-app-rest.herokuapp.com/';
    
    constructor(private http: HttpClient,
                private loginService: LoginService) {
    }
    
    ngOnInit(): void { 
    }
    
    searchLaboratories(searchText: string): Observable<Laboratory[]> {
        let token = this.loginService.getToken();
        let headers = new HttpHeaders({
            'Content-Type':'application/json',
            'Authorization' : 'Bearer ' + token
        });
        
        return this.http.get<Laboratory[]>(this.BASE_API_URL + 'rest/laboratory?textName=' + searchText, { headers });
    }
    
    getLaboratories(): Observable<Laboratory[]> {
        let token = this.loginService.getToken();
        let headers = new HttpHeaders({
          'Content-Type':'application/json',
          'Authorization' : 'Bearer ' + token
          });
        
        return this.http.get<Laboratory[]>(this.BASE_API_URL + 'rest/laboratory', { headers });
    }
    
    getLaboratory(laboratoryCode: string) {
        let token = this.loginService.getToken();
        let headers = new HttpHeaders({
          'Content-Type':'application/json',
          'Authorization' : 'Bearer ' + token
          });
        
        return this.http.get<Laboratory[]>(this.BASE_API_URL + 'rest/laboratory/' + laboratoryCode, { headers });
    }
    
    saveLaboratory(laboratory: Laboratory) {
        laboratory.code = null;
        let body = JSON.stringify(laboratory);
        let token = this.loginService.getToken();
        let headers = new HttpHeaders({
          'Content-Type':'application/json',
          'Authorization' : 'Bearer ' + token
          });
        
        return this.http.post<Laboratory>(this.BASE_API_URL + 'rest/laboratory/', body, { headers });
    }
    
    updateLaboratory(laboratory: Laboratory) {
        let body = JSON.stringify(laboratory);
        let token = this.loginService.getToken();
        let headers = new HttpHeaders({
          'Content-Type':'application/json',
          'Authorization' : 'Bearer ' + token
          });
        
        return this.http.put<Laboratory>(this.BASE_API_URL + 'rest/laboratory/', body, { headers });
    }
    
}