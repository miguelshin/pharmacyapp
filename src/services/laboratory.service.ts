import { Injectable, OnInit } from "@angular/core";
import { Laboratory } from '../models/laboratory.model';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class LaboratoryService {
    BASE_API_URL:string = 'http://localhost:8080/';
    
    constructor(private http: HttpClient) {
    }
    
    ngOnInit(): void { 
    }
    
    getLaboratories(): Observable<Laboratory[]> {
        var laboratoryList: Laboratory[] = [];
        var laboratory1 = {
            'code' : '1',
            'name' : 'laboratory name',
            'address' : 'c/pepe',
            'cif' : '323213'
        }
        var laboratory2 = {
            'code' : '1',
            'name' : 'laboratory name',
            'address' : 'c/pepe',
            'cif' : '323213'
        }
        
        let headers = new HttpHeaders({
            'Authorization' : 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1NDA5Mjk5MjksImlzcyI6Imh0dHBzOi8vd3d3LmF1dGVudGlhLmNvbS8iLCJzdWIiOiJiZW5pdG9taWxsYW5AZ21haWwuY29tIiwiZXhwIjoxNTQxNzkzOTI5fQ.sukTHwTGGEFkzefLqtcog8jDKBznGcgj8AaZT1lL3pnwjOugxbPHZG2AOjfPSUwvTSdDZ25BAHhDv3nC3RXl0Q'
        });
        
        return this.http.get<Laboratory[]>(this.BASE_API_URL + 'rest/laboratory', { headers });
        
        /*laboratoryList.push(laboratory1);
        laboratoryList.push(laboratory2);
        return laboratoryList;*/
    }
    
    getLaboratory(laboratoryCode: string) {
        let headers = new HttpHeaders({
            'Authorization' : 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1NDA5Mjk5MjksImlzcyI6Imh0dHBzOi8vd3d3LmF1dGVudGlhLmNvbS8iLCJzdWIiOiJiZW5pdG9taWxsYW5AZ21haWwuY29tIiwiZXhwIjoxNTQxNzkzOTI5fQ.sukTHwTGGEFkzefLqtcog8jDKBznGcgj8AaZT1lL3pnwjOugxbPHZG2AOjfPSUwvTSdDZ25BAHhDv3nC3RXl0Q'
        });
        
        return this.http.get<Laboratory[]>(this.BASE_API_URL + 'rest/laboratory/' + laboratoryCode, { headers });
    }
    
    saveLaboratory(laboratory: Laboratory) {
        laboratory.code = null;
        let body = JSON.stringify(laboratory);
        let headers = new HttpHeaders({
            'Content-Type':'application/json',
            'Authorization' : 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1NDA5Mjk5MjksImlzcyI6Imh0dHBzOi8vd3d3LmF1dGVudGlhLmNvbS8iLCJzdWIiOiJiZW5pdG9taWxsYW5AZ21haWwuY29tIiwiZXhwIjoxNTQxNzkzOTI5fQ.sukTHwTGGEFkzefLqtcog8jDKBznGcgj8AaZT1lL3pnwjOugxbPHZG2AOjfPSUwvTSdDZ25BAHhDv3nC3RXl0Q'
        });
        
        return this.http.post<Laboratory>(this.BASE_API_URL + 'rest/laboratory/', body, { headers });
    }
    
    updateLaboratory(laboratory: Laboratory) {
        let body = JSON.stringify(laboratory);
        let headers = new HttpHeaders({
            'Content-Type':'application/json',
            'Authorization' : 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1NDA5Mjk5MjksImlzcyI6Imh0dHBzOi8vd3d3LmF1dGVudGlhLmNvbS8iLCJzdWIiOiJiZW5pdG9taWxsYW5AZ21haWwuY29tIiwiZXhwIjoxNTQxNzkzOTI5fQ.sukTHwTGGEFkzefLqtcog8jDKBznGcgj8AaZT1lL3pnwjOugxbPHZG2AOjfPSUwvTSdDZ25BAHhDv3nC3RXl0Q'
        });
        
        return this.http.put<Laboratory>(this.BASE_API_URL + 'rest/laboratory/', body, { headers });
    }
    
}