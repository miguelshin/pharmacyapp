import {Component, OnInit} from '@angular/core';
import { LoginService } from '../../services/login.service';
import { User } from '../../models/user';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
    selector: 'login',
    templateUrl: './login.html'
})

export class Login implements OnInit {
    
    user : User = new User();
    constructor(public loginService: LoginService,
        private navCtrl: NavController) {}
    
    ngOnInit(): void { 
    }
    
    login() {
        this.loginService.login(this.user)
        .subscribe(
            user => {
                this.loginService.saveToken(user.token);
                this.navCtrl.push(TabsPage);
        },
        error => {
            console.error(error);
        });        
    }
    
    
}