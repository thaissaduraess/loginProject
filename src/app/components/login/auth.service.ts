import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Injectable()
export class AuthService {
  private UsuarioAutenticado: boolean = false;

mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }
  fazerlogin(usuario: Usuario){
    if (usuario.nome === 'thaissaduraess@gmail.com' &&
    usuario.senha === 'teste123' ){

      this.UsuarioAutenticado = true;

      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['dashboard'])

    } else {
      this.UsuarioAutenticado = false;

      this.mostrarMenuEmitter.emit(false);
    }
    }
  }

