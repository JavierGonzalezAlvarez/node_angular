
import { Usuario } from "./usuarios";

export interface ResponseDirecionUsuarios {
    //docs lo asigno a la clase creada => Usuario
    docs: Usuario;
}

export interface ResponseDirecionUser {
    docs: DocDireccionUser[];
}

export interface DocDireccionUser {
    isActive:     boolean;
    _id:          string;
    direccion:    string;
    provincia:    string;
    codigoPostal: string;
    telefono:     string;
    user:         string;
    createdAt:    Date;
    updatedAt:    Date;
}
