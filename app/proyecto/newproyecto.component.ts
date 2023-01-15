import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from '../model/proyecto';
import { ProyectoService } from '../service/proyecto.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit {
  titulo: string = '';
  acercaproyec: string = '';

  constructor(private Sproyecto: ProyectoService, private router: Router) { }


  ngOnInit(): void {
  }
  onCreate(): void{
    const proyecto = new Proyecto(this.titulo, this.acercaproyec);
    this.Sproyecto.save(proyecto).subscribe(data => {
      alert("Proyecto añadido");
      this.router.navigate(['']);
    },err =>{
      alert("fallo en la carga, intente nuevamente");
      this.router.navigate(['']);
    }  
    )
  }

}
