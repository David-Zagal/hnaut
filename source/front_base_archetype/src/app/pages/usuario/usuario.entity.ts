import { ProfileEntity } from "./profile/profile.entity";

export class UsuarioEntity {

    surname: string;
    lastname: string;
    login: string;
    codeRol: string; 
    active: boolean = false;
    profiles: ProfileEntity[];
    //healthUnits: string[];
     
    fullName: string;  
}