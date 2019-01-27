import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { User } from "../models/user";

@Injectable()
export class LoginService {
    BASE_API_URL:string = 'http://localhost:8181/';
    
    constructor(private http: HttpClient) {
    }
    
    ngOnInit(): void { 
    }
    
    login(user: User): Observable<User> {
        debugger;
        let body = JSON.stringify(user);
        let headers = new HttpHeaders({
            'Content-Type':'application/json'
        });
        
        return this.http.post<User>(this.BASE_API_URL + 'rest/login', body, { headers });
    }
}