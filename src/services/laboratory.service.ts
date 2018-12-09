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

    searchLaboratories(searchText: string): Observable<Laboratory[]> {
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
            'Authorization' : 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1NDQyNjU2MzcsImlzcyI6Imh0dHBzOi8vd3d3LmF1dGVudGlhLmNvbS8iLCJzdWIiOiJiZW5pdG9taWxsYW5AZ21haWwuY29tIiwiZXhwIjoxNTQ1MTI5NjM3fQ.axGamv_UTxKHFgjQhtkioOwv0ZtlUNNhqD42oeu9Gf4-clViFkmdJpMd5T-RnmEoZD-YV_fF11t0ShICa_8egA'
        });
        
        return this.http.get<Laboratory[]>(this.BASE_API_URL + 'rest/laboratory?textName=' + searchText, { headers });
        
        /*laboratoryList.push(laboratory1);
        laboratoryList.push(laboratory2);
        return laboratoryList;*/
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
            'Authorization' : 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1NDQyNjU2MzcsImlzcyI6Imh0dHBzOi8vd3d3LmF1dGVudGlhLmNvbS8iLCJzdWIiOiJiZW5pdG9taWxsYW5AZ21haWwuY29tIiwiZXhwIjoxNTQ1MTI5NjM3fQ.axGamv_UTxKHFgjQhtkioOwv0ZtlUNNhqD42oeu9Gf4-clViFkmdJpMd5T-RnmEoZD-YV_fF11t0ShICa_8egA'
        });
        
        return this.http.get<Laboratory[]>(this.BASE_API_URL + 'rest/laboratory', { headers });
        
        /*laboratoryList.push(laboratory1);
        laboratoryList.push(laboratory2);
        return laboratoryList;*/
    }
    
    getLaboratory(laboratoryCode: string) {
        let headers = new HttpHeaders({
            'Authorization' : 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1NDQyNjU2MzcsImlzcyI6Imh0dHBzOi8vd3d3LmF1dGVudGlhLmNvbS8iLCJzdWIiOiJiZW5pdG9taWxsYW5AZ21haWwuY29tIiwiZXhwIjoxNTQ1MTI5NjM3fQ.axGamv_UTxKHFgjQhtkioOwv0ZtlUNNhqD42oeu9Gf4-clViFkmdJpMd5T-RnmEoZD-YV_fF11t0ShICa_8egA'
        });
        
        return this.http.get<Laboratory[]>(this.BASE_API_URL + 'rest/laboratory/' + laboratoryCode, { headers });
    }
    
    saveLaboratory(laboratory: Laboratory) {
        laboratory.code = null;
        let body = JSON.stringify(laboratory);
        let headers = new HttpHeaders({
            'Content-Type':'application/json',
            'Authorization' : 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1NDQyNjU2MzcsImlzcyI6Imh0dHBzOi8vd3d3LmF1dGVudGlhLmNvbS8iLCJzdWIiOiJiZW5pdG9taWxsYW5AZ21haWwuY29tIiwiZXhwIjoxNTQ1MTI5NjM3fQ.axGamv_UTxKHFgjQhtkioOwv0ZtlUNNhqD42oeu9Gf4-clViFkmdJpMd5T-RnmEoZD-YV_fF11t0ShICa_8egA'
        });
        
        return this.http.post<Laboratory>(this.BASE_API_URL + 'rest/laboratory/', body, { headers });
    }
    
    updateLaboratory(laboratory: Laboratory) {
        let body = JSON.stringify(laboratory);
        let headers = new HttpHeaders({
            'Content-Type':'application/json',
            'Authorization' : 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1NDQyNjU2MzcsImlzcyI6Imh0dHBzOi8vd3d3LmF1dGVudGlhLmNvbS8iLCJzdWIiOiJiZW5pdG9taWxsYW5AZ21haWwuY29tIiwiZXhwIjoxNTQ1MTI5NjM3fQ.axGamv_UTxKHFgjQhtkioOwv0ZtlUNNhqD42oeu9Gf4-clViFkmdJpMd5T-RnmEoZD-YV_fF11t0ShICa_8egA'
        });
        
        return this.http.put<Laboratory>(this.BASE_API_URL + 'rest/laboratory/', body, { headers });
    }
    
}