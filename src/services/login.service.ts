import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { User } from "../models/user";

@Injectable()
export class LoginService {
    BASE_API_URL: string = 'https://pharmacy-auth-rest.herokuapp.com/';
    token: string = null;
    
    constructor(private http: HttpClient) {
    }
    
    ngOnInit(): void { 
    }
    
    login(user: User): Observable<User> {
        let body = JSON.stringify(user);
        let headers = new HttpHeaders({
            'Content-Type':'application/json'
        });
        
        return this.http.post<User>(this.BASE_API_URL + 'rest/login', body, { headers });
    }

    saveToken(token: string) {
        this.token = token;
    }

    getToken(): string {
        return this.token;
    }
}