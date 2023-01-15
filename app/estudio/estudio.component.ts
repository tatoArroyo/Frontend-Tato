import { Component, OnInit } from '@angular/core';
import { Estudio } from '../model/estudio';
import { EstudioService } from '../service/estudio.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-estudio',
  templateUrl: './estudio.component.html',
  styleUrls: ['./estudio.component.css']
})
export class EstudioComponent implements OnInit {
  estudio: Estudio [] = [];
  constructor(private estudioS: EstudioService, private tokenService: TokenService) { }
isLogged = false;

  ngOnInit(): void {
   this.cargarEstudio();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
}
cargarEstudio(): void{
  this.estudioS.lista().subscribe(data => {this.estudio = data});
}

delete(id?: number){
  if(id != undefined){
this.estudioS.delete(id).subscribe(
  data =>{
    this.cargarEstudio();
  }, err =>{
    alert("no se pudo eliminar la experiencia")
  }
)
  }
}

}
