import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencias } from '../model/experiencias';
import { ExperienciasService } from '../service/experiencias.service';

@Component({
  selector: 'app-newexperiencias',
  templateUrl: './newexperiencias.component.html',
  styleUrls: ['./newexperiencias.component.css']
})
export class NewexperienciasComponent implements OnInit {
  nombreE: string;
  descripcionE: string;
  inicio: string;
  fin: string;
  puesto: string;
  
  constructor(private experienciasS: ExperienciasService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate(): void{
    const experiencias = new Experiencias(this.nombreE, this.descripcionE, this.inicio, this.fin, this.puesto);
    this.experienciasS.save(experiencias).subscribe(data => {
      alert("Experiencia añadida");
      this.router.navigate(['']);
    },err =>{
      alert("fallo en la carga, intente nuevamente");
      this.router.navigate(['']);
    }  
    )
  }

}
