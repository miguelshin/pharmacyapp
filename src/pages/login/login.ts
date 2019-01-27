import {Component, OnInit} from '@angular/core';
import { LoginService } from '../../services/login.service';
import { User } from '../../models/user';

@Component({
    selector: 'login',
    templateUrl: './login.html'
})

export class Login implements OnInit {
    
    user : User = new User();
    constructor(public loginService: LoginService) {}
    
    ngOnInit(): void { 
    }
    
    login() {
        this.loginService.login(this.user)
            .subscribe(user => {
                debugger;
        });
        
    }
    
    
}