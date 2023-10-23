import { AuthService } from '../../service/auth.service';
import { Component, OnInit } from '@angular/core';

import { Usuario } from 'src/app/class/usuario';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  usuario: Usuario = new Usuario();

  constructor(private AuthService: AuthService) {}

  ngOnInit() {}

  fazerLogin() {
    console.log(this.usuario);
    //this.authService.fazerlogin(this.usuario);
  }
}
