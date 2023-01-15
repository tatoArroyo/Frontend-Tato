import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencias } from '../model/experiencias';
import { ExperienciasService } from '../service/experiencias.service';

@Component({
  selector: 'app-editexperiencias',
  templateUrl: './editexperiencias.component.html',
  styleUrls: ['./editexperiencias.component.css']
})
export class EditexperienciasComponent implements OnInit {

  expLab: Experiencias = null;

  constructor(private experienciasS: ExperienciasService, private activatedRouter: ActivatedRoute,
    private router: Router ) { }

    ngOnInit(): void {

      const id = this.activatedRouter.snapshot.params['id'];
      this.experienciasS.detail(id).subscribe(
        data =>{
          this.expLab = data;
        },err =>{
          alert("Error al modificar experiencia");
          this.router.navigate(['']);
        }
      )
  
    }   

onUpdate(): void{
  const id = this.activatedRouter.snapshot.params['id'];
  this.experienciasS.update(id, this.expLab).subscribe(
    data => {
      this.router.navigate(['']);
    },err =>{
      alert("Error al modificar experiencia");
      this.router.navigate(['']);
    }
  )
}
}
