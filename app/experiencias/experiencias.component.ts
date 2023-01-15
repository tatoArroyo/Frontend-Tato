import { Component, OnInit } from "@angular/core";
import { Experiencias } from "../model/experiencias";
import { ExperienciasService } from "../service/experiencias.service";
import { TokenService } from "../service/token.service";

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit  {

  expe: Experiencias [] = [];

  constructor(private experienciaS: ExperienciasService, private tokenService: TokenService) { }
  
  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
}
cargarExperiencia(): void{
  this.experienciaS.lista().subscribe(data => {this.expe = data});
}

delete(id?: number){
  if(id != undefined){
this.experienciaS.delete(id).subscribe(
  data =>{
    this.cargarExperiencia();
  }, err =>{
    alert("no se pudo eliminar la experiencia")
  }
)
  }
}
}
