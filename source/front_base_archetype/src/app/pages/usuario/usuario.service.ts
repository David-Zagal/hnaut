import { Injectable } from '@angular/core';
import { UsuarioEntity } from './usuario.entity';
import { UsuarioUpdateEntity } from './usuario-update/usuarioUpdate.entity';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
//import { USERS } from './usuario.json';

@Injectable({providedIn: 'root'})
export class UsuarioService 
{
  //Aquí va el servicio donde obtenemos los usuarios para la tabla
  //Hay que crear un observable y suscribirlo al GET de la url correspondiente
  private urlEndPoint: string = 'http://localhost:8080/hnautrest/api/user';
  private httpHeaders: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'});

  constructor(private http: HttpClient, private router: Router) { }

/*  getUsers(): UsuarioEntity[]
  {
    return USERS;
  }*/

  getUsers():  Observable<UsuarioEntity[]> {
    let headers = new HttpHeaders()
    headers=headers.append('content-type','application/json')
    headers=headers.append('Access-Control-Allow-Origin', '*')
    headers=headers.append('content-type','application/x-www-form-urlencoded')
    headers=headers.append('customer-header', 'custom')
    console.log(headers)
  
    return this.http.get<UsuarioEntity[]>(this.urlEndPoint, { 'headers': headers });
  }  

  deleteUser(usuario : UsuarioEntity) {
    return this.http.post(this.urlEndPoint+'/delete',usuario);
  }

  saveUser(usuario: UsuarioEntity) {
    console.log("Entra en save 2");
    return this.http.post(this.urlEndPoint+'/save',usuario);
  }

  editUser(usuario: UsuarioUpdateEntity) {
    console.log("Entra en edit 2");
    return this.http.put(this.urlEndPoint+'/update',usuario);
  }
}