import { Injectable, OnInit } from "@angular/core";
import { Pharmacy } from '../models/pharmacy.model';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class PharmacyService {
    BASE_API_URL:string = 'http://localhost:8080/';

    constructor(private http: HttpClient) {
    }
    
    ngOnInit(): void { 
    }

    searchPharmacies(searchText: string): Observable<Pharmacy[]> {
        var pharmacyList: Pharmacy[] = [];

        let headers = new HttpHeaders({
            'Authorization' : 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1NDMwNTExMzgsImlzcyI6Imh0dHBzOi8vd3d3LmF1dGVudGlhLmNvbS8iLCJzdWIiOiJiZW5pdG9taWxsYW5AZ21haWwuY29tIiwiZXhwIjoxNTQzOTE1MTM4fQ.Z6F8aXk6dcqlixa2UJ7qEtoXDMVyctCd4oZNKbNI-9QaTVWhavpgxhBm3DrCUbdqMI00_Sy8ZURt5wZ6zeuCGA'
        });
        
        return this.http.get<Pharmacy[]>(this.BASE_API_URL + 'rest/pharmacy?textName=' + searchText, { headers });
        
        /*laboratoryList.push(laboratory1);
        laboratoryList.push(laboratory2);
        return laboratoryList;*/
    }
    
    getPharmacies(): Observable<Pharmacy[]> {
        var pharmacyList: Pharmacy[] = [];
        var pharmacy1 = {
            'code' : '1',
            'name' : 'pharmacy name',
            'address' : 'c/pepe',
            'cif' : '323213'
        }
        var pharmacy2 = {
            'code' : '1',
            'name' : 'pharmacy name',
            'address' : 'c/pepe',
            'cif' : '323213'
        }
        
        let headers = new HttpHeaders({
            'Authorization' : 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1NDMwNTExMzgsImlzcyI6Imh0dHBzOi8vd3d3LmF1dGVudGlhLmNvbS8iLCJzdWIiOiJiZW5pdG9taWxsYW5AZ21haWwuY29tIiwiZXhwIjoxNTQzOTE1MTM4fQ.Z6F8aXk6dcqlixa2UJ7qEtoXDMVyctCd4oZNKbNI-9QaTVWhavpgxhBm3DrCUbdqMI00_Sy8ZURt5wZ6zeuCGA'
        });
        
        return this.http.get<Pharmacy[]>(this.BASE_API_URL + 'rest/pharmacy', { headers });
        
        /*pharmacyList.push(pharmacy1);
        pharmacyList.push(pharmacy2);
        return pharmacyList;*/
    }

    getPharmacy(pharmacyCode: string) {
        let headers = new HttpHeaders({
            'Authorization' : 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1NDMwNTExMzgsImlzcyI6Imh0dHBzOi8vd3d3LmF1dGVudGlhLmNvbS8iLCJzdWIiOiJiZW5pdG9taWxsYW5AZ21haWwuY29tIiwiZXhwIjoxNTQzOTE1MTM4fQ.Z6F8aXk6dcqlixa2UJ7qEtoXDMVyctCd4oZNKbNI-9QaTVWhavpgxhBm3DrCUbdqMI00_Sy8ZURt5wZ6zeuCGA'
        });
        
        return this.http.get<Pharmacy[]>(this.BASE_API_URL + 'rest/pharmacy/' + pharmacyCode, { headers });
    }

    savePharmacy(pharmacy: Pharmacy) {
        pharmacy.code = null;
        let body = JSON.stringify(pharmacy);
        let headers = new HttpHeaders({
            'Content-Type':'application/json',
            'Authorization' : 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1NDMwNTExMzgsImlzcyI6Imh0dHBzOi8vd3d3LmF1dGVudGlhLmNvbS8iLCJzdWIiOiJiZW5pdG9taWxsYW5AZ21haWwuY29tIiwiZXhwIjoxNTQzOTE1MTM4fQ.Z6F8aXk6dcqlixa2UJ7qEtoXDMVyctCd4oZNKbNI-9QaTVWhavpgxhBm3DrCUbdqMI00_Sy8ZURt5wZ6zeuCGA'
        });
        
        return this.http.post<Pharmacy>(this.BASE_API_URL + 'rest/pharmacy/', body, { headers });
    }

    updatePharmacy(pharmacy: Pharmacy) {
        let body = JSON.stringify(pharmacy);
        let headers = new HttpHeaders({
            'Content-Type':'application/json',
            'Authorization' : 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1NDMwNTExMzgsImlzcyI6Imh0dHBzOi8vd3d3LmF1dGVudGlhLmNvbS8iLCJzdWIiOiJiZW5pdG9taWxsYW5AZ21haWwuY29tIiwiZXhwIjoxNTQzOTE1MTM4fQ.Z6F8aXk6dcqlixa2UJ7qEtoXDMVyctCd4oZNKbNI-9QaTVWhavpgxhBm3DrCUbdqMI00_Sy8ZURt5wZ6zeuCGA'
        });
        
        return this.http.put<Pharmacy>(this.BASE_API_URL + 'rest/pharmacy/', body, { headers });
    }

}