export interface Usuario{
    name: string;
    apellido: string;
    email: string;
    password: string;
    token: string;
}

export interface respuestaAutenticacion {
    token: string;
    //expiracion: Date;
}