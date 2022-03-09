import { UsuarioEntity } from "../usuario.entity";

/*export class UsuarioUpdateEntity {

    loginOriginal: string;
    userAudit: string;
    user: UsuarioEntity;  
}*/

export class UsuarioUpdateEntity {
    loginOriginal: string;
    userAudit: string;

    dni: string;
    login: string;
    lastname: string;
    surname: string;
    segundoApellido: string;
    roles: [{
        idRol: number,
        codeRol: string,
        descripcion: string
    }];
    centros: [{
        idCentro: number,
        descCentro: string,
        telefono: number,
        tipoCentro: string,
        active: boolean
      }
    ]
  }