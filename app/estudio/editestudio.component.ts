import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudio } from '../model/estudio';
import { EstudioService } from '../service/estudio.service';

@Component({
  selector: 'app-editestudio',
  templateUrl: './editestudio.component.html',
  styleUrls: ['./editestudio.component.css']
})
export class EditestudioComponent implements OnInit {
  estudio: Estudio = null;
  
  constructor(private estudioS: EstudioService, private activatedRouter: ActivatedRoute,
  private router: Router) { }


    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.estudioS.detail(id).subscribe(
        data =>{
          this.estudio = data;
        },err =>{
          alert("Error al modificar experiencia");
          this.router.navigate(['']);
        }
      )
  
    }
    onUpdate(): void{
      const id = this.activatedRouter.snapshot.params['id'];
      this.estudioS.update(id, this.estudio).subscribe(
        data => {
          this.router.navigate(['']);
        },err =>{
          alert("Error al modificar experiencia");
          this.router.navigate(['']);
        }
      )
    }
}
