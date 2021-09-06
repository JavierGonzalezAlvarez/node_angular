export class Usuario {    

    //para instanciar la clase
    //evitamos el error {[index: string]:any} = {}
    //        => {[index: string]:any} = {}
    public static usuarioJson( obj: {[index: string]:any} = {} ) {        
        return new Usuario(
            obj['isActive'],
            obj['_id'],
            obj['direccion'],
            obj['provincia'],
            obj['codigoPostal'],
            obj['telefono'],
            obj['user'],
            obj['createdAt'],
            obj['updatedAt'],                
        );
    }
       
    constructor(
        public isActive: string,
        public id: number,
        public direccion: string,
        public provincia: string,
        public codigoPostal: string,
        public telefono: string,
        public user: string,
        public createdAt: string,
        public updatedAt: string,        
    ){}

    //tener la direccion y el codigo postal juntos
    get direccionCP() {
        return `${this.direccion} ${this.codigoPostal}`
    }

}