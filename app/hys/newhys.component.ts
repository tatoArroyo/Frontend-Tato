import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from '../model/skill';
import { SkillService } from '../service/skill.service';

@Component({
  selector: 'app-newhys',
  templateUrl: './newhys.component.html',
  styleUrls: ['./newhys.component.css']
})
export class NewhysComponent implements OnInit {

  habilidades: string ;
  porcentaje: number;


  constructor(private Sskill: SkillService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate(): void{
    const skill = new Skill(this.habilidades, this.porcentaje);
    this.Sskill.save(skill).subscribe(data => {
      alert("Experiencia añadida");
      this.router.navigate(['']);
    },err =>{
      alert("fallo en la carga, intente nuevamente");
      this.router.navigate(['']);
    }  
    )
  }
}
