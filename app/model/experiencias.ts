export class Experiencias {

    id?: number;
    nombreE: string;
    descripcionE: string;
    inicio: string;
    fin: string;
    puesto: string;


    constructor(nombreE: string, descripcionE: string, inicio: string, fin: string, puesto: string){
    this.nombreE = nombreE;
    this.descripcionE = descripcionE;
    this.inicio = inicio;
    this.fin = fin;
    this.puesto = puesto;
    
}
}
