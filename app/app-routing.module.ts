import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditacercaComponent } from './acerca/editacerca.component';
import { EditestudioComponent } from './estudio/editestudio.component';
import { NewestudioComponent } from './estudio/newestudio.component';
import { EditexperienciasComponent } from './experiencias/editexperiencias.component';
import { NewexperienciasComponent } from './experiencias/newexperiencias.component';
import { EdithysComponent } from './hys/edithys.component';
import { NewhysComponent } from './hys/newhys.component';
import { IntroComponent } from './intro/intro.component';
import { LoginComponent } from './login/login.component';
import { EditproyectoComponent } from './proyecto/editproyecto.component';
import { NewproyectoComponent } from './proyecto/newproyecto.component';

const routes: Routes = [
  {path:'', component: IntroComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaexp', component: NewexperienciasComponent},
  {path:'editexp', component: EditexperienciasComponent},
  {path:'nuevoestu', component: NewestudioComponent},
  {path:'editestu', component: EditestudioComponent},
  {path:'nuevohys', component: NewhysComponent},
  {path:'edithys', component: EdithysComponent},
  {path:'newproy', component: NewproyectoComponent},
  {path:'editproy', component: EditproyectoComponent},
  {path:'editper', component: EditacercaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
