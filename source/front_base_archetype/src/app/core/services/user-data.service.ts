import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PermisoResponse } from '../models/services/response/permiso-response.model';
import { RestService } from './rest.service';
import { UserResponse } from '../models/services/response/user-response.model';
import { ServiceResponse } from '../models/services/response/service-response.model';
import { rest } from '../../../environments/endpoints';

@Injectable()
/**
 * user service class
 */
export class UserDataService {

  // users: User[] = [];
  public user: string;
  public password: string;

  constructor(private restService: RestService) {
    /*let user = {
        userId: 1, userName: "admin", password: "password", emailId: "agonj10@ext.mde.es", birthDate: new Date('10/28/1992')
    };
    this.users.push(user);*/
  }

  // Servicio de consulta: devuelve los datos del usuario logado si existe y tiene sesión
  getUser(): Observable<ServiceResponse<UserResponse>> {
    return this.restService.get(environment.apiRestJava + rest.endpoints.userdata)
      .pipe(map((response: ServiceResponse<UserResponse>) => response));
  }

  checkPermissions(id: string): Observable<ServiceResponse<PermisoResponse[]>> {
    return this.restService.get(environment.apiRestJava + rest.endpoints.comprobarPermisos + id)
      .pipe(map((res: ServiceResponse<PermisoResponse[]>) => res));
  }

  setUser(user: string, pass: string) {
    this.user = user;
    this.password = pass;
  }

  getUserDicodef(id: string): Observable<ServiceResponse<UserResponse>> {
    return this.restService.get(environment.apiRestJava + rest.endpoints.dicodef + id)
      .pipe(map((res: ServiceResponse<UserResponse>) => res));
  }
}
