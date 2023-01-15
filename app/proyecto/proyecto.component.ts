import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../model/proyecto';
import { ProyectoService } from '../service/proyecto.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  isLogged = false;
proyecto: Proyecto [] = [];

  constructor(private sProyecto: ProyectoService, 
    private tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
}
cargarProyecto(): void{
  this.sProyecto.lista().subscribe(data => {this.proyecto = data});
}

delete(id: number){
  if(id != undefined){
this.sProyecto.delete(id).subscribe(
  data =>{
    this.cargarProyecto();
  }, err =>{
    alert("no se pudo eliminar el proyecto")
  }
)
  }
}
}

