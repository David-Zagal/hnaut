import { Injectable } from '@angular/core';
import { StatusEntity } from './status.entity';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { STATUS } from './status.json';

@Injectable({providedIn: 'root'})
export class StatusService 
{
  //Aquí va el servicio donde obtenemos los usuarios para la tabla
  //Hay que crear un observable y suscribirlo al GET de la url correspondiente
  private urlEndPoint: string = 'http://localhost:8080/';
  private httpHeaders: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient, private router: Router) { }

  getStatus(): StatusEntity[]
  {
    return STATUS;
  }
}