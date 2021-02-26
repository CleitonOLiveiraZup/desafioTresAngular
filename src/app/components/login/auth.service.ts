import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAuntenticado: boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor( private router: Router) { }

  fazerLogin(usuario: Usuario): void{

    if(usuario.nome === 'usuario@gmail.com' && usuario.senha === '1234prime'){

     this.mostrarMenuEmitter.emit(true);
     this.usuarioAuntenticado = true; 
     this.router.navigate([''])

    }else{
      this.mostrarMenuEmitter.emit(false);
      this.usuarioAuntenticado = false;
      alert("Senha ou Usuario incorreto")
    }
  }
  usuarioEstaAunteticado(){
    return this.usuarioAuntenticado;
  }
}
