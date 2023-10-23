import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';

import { Usuario } from 'src/app/class/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private AuthService: AuthService) { }

  ngOnInit() {
  }

  fazerLogin(){
    console.log(this.usuario);
    //this.authService.fazerlogin(this.usuario);
  }

}


