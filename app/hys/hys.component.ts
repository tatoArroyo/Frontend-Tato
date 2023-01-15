import { Component, OnInit } from '@angular/core';
import { Skill } from '../model/skill';
import { SkillService } from '../service/skill.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {
  skill: Skill [] = [];
 


  constructor(private sSkill: SkillService, 
    private tokenService: TokenService){}
isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
}
cargarSkills(): void{
  this.sSkill.lista().subscribe(data => {this.skill = data});
}

delete(id: number){
  if(id != undefined){
this.sSkill.delete(id).subscribe(
  data =>{
    this.cargarSkills();
  }, err =>{
    alert("no se pudo eliminar la habilidad")
  }
)
  }
} 

}
