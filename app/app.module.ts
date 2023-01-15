import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoAPComponent } from './logo-ap/logo-ap.component';
import { RedesComponent } from './redes/redes.component';
import { BannerComponent } from './banner/banner.component';
import { AcercaComponent } from './acerca/acerca.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { EstudioComponent } from './estudio/estudio.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FormsModule } from '@angular/forms';
import { HysComponent } from './hys/hys.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { FooteComponent } from './foote/foote.component';
import { HttpClientModule} from '@angular/common/http';
import { IntroComponent } from './intro/intro.component';
import { LoginComponent } from './login/login.component';
import { interceptorProvider } from './service/interceptor.service';
import { NewexperienciasComponent } from './experiencias/newexperiencias.component';
import { EditexperienciasComponent } from './experiencias/editexperiencias.component';
import { NewestudioComponent } from './estudio/newestudio.component';
import { EditestudioComponent } from './estudio/editestudio.component';
import { NewhysComponent } from './hys/newhys.component';
import { EdithysComponent } from './hys/edithys.component';
import { NewproyectoComponent } from './proyecto/newproyecto.component';
import { EditproyectoComponent } from './proyecto/editproyecto.component';
import { EditacercaComponent } from './acerca/editacerca.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    RedesComponent,
    BannerComponent,
    AcercaComponent,
    ExperienciasComponent,
    EstudioComponent,
    HysComponent,
    ProyectoComponent,
    FooteComponent,
    IntroComponent,
    LoginComponent,
    NewexperienciasComponent,
    EditexperienciasComponent,
    NewestudioComponent,
    EditestudioComponent,
    NewhysComponent,
    EdithysComponent,
    NewproyectoComponent,
    EditproyectoComponent,
    EditacercaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    CommonModule
  ],
  providers: [
    interceptorProvider
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
