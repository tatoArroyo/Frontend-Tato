import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from '../model/skill';
import { SkillService } from '../service/skill.service';

@Component({
  selector: 'app-edithys',
  templateUrl: './edithys.component.html',
  styleUrls: ['./edithys.component.css']
})

export class EdithysComponent implements OnInit  {
  skill: Skill = null;


  constructor(private sSkill: SkillService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    const id = this.activatedRouter.snapshot.params['id'];
    this.sSkill.detail(id).subscribe(
      data =>{
        this.skill = data;
      },err =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )

  }
  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sSkill.update(id, this.skill).subscribe(
      data => {
        this.router.navigate(['']);
      },err =>{
        alert("Error al modificar skill");
        this.router.navigate(['']);
      }
    )
  } 

}
