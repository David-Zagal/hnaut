export class UserResponse {
    constructor() {
        this.dni = null;
        this.codUsuario = null;
        this.nombreUsuario = null;
        this.primerApellido = null;
        this.segundoApellido = null;
    }

    dni: string;
    codUsuario: string;
    nombreUsuario: string;
    primerApellido: string;
    segundoApellido: string;
    grupos: Grupos[];
    
}

export interface Grupos {
    id: number;
    descripcion: string;
}

