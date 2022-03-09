import { Injectable } from '@angular/core';
import { ProfileEntity } from './profile.entity';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { UsuarioEntity } from '../usuario.entity';
//import { PROFILES } from './profile.json';

@Injectable({providedIn: 'root'})
export class ProfileService 
{
  //Aquí va el servicio donde obtenemos los usuarios para la tabla
  //Hay que crear un observable y suscribirlo al GET de la url correspondiente
  private urlEndPoint: string = 'http://localhost:8080/hnautrest/api/profile';
  private httpHeaders: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'});

  constructor(private http: HttpClient, private router: Router) { }

  /*
  getProfiles(): ProfileEntity[]
  {
    return PROFILES;
  }*/

  getProfiles():  Observable<ProfileEntity[]>
  {
    let headers = new HttpHeaders()
    headers=headers.append('content-type','application/json')
    headers=headers.append('Access-Control-Allow-Origin', '*')
    headers=headers.append('content-type','application/x-www-form-urlencoded')
    headers=headers.append('customer-header', 'custom')
    console.log(headers)
  
    return this.http.get<ProfileEntity[]>(this.urlEndPoint, { 'headers': headers });
  }

  getUserProfiles(usuario: UsuarioEntity): Observable<ProfileEntity[]>
  {
    console.log('Llega al getUserProfiles. ');
    return this.http.post<ProfileEntity[]>(this.urlEndPoint+'/findByUser',usuario);
  }
}