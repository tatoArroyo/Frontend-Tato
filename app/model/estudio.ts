export class Estudio {

    id?: number;
    titulo: string;
    inicio: string 
    fin: string;
    nombreE: string;
    descripcionE: string;


    constructor(nombreE: string, descripcionE: string, titulo: string, fin: string, inicio: string){
    this.nombreE = nombreE;
    this.descripcionE = descripcionE;
    this.titulo = titulo;
    this.fin = fin;
    this.inicio = inicio;

}
}
