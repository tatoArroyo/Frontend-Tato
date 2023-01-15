import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudio } from '../model/estudio';
import { EstudioService } from '../service/estudio.service';

@Component({
  selector: 'app-newestudio',
  templateUrl: './newestudio.component.html',
  styleUrls: ['./newestudio.component.css']
})
export class NewestudioComponent implements OnInit {
  nombreE:string = '';
  descripcionE:string = '';
  inicio: string = '';
  fin: string = '';
  titulo: string = '';
  
    constructor(private estudioS: EstudioService, private router: Router) { }
  
    ngOnInit(): void {
    }
  
  
    onCreate(): void{
      const estudio = new Estudio(this.nombreE, this.descripcionE, this.inicio, this.fin, this.titulo);
      this.estudioS.save(estudio).subscribe(data => {
        alert("Estudio añadido");
        this.router.navigate(['']);
      },err =>{
        alert("fallo en la carga, intente nuevamente");
        this.router.navigate(['']);
      }  
      )
    }

}
