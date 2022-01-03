import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',

})
export class MainPageComponent {

  personajes: Personaje[] =[
    {
      nombre:'Goku',
      poder: 8900
    },
    {
      nombre:'Vegueta',
      poder:98882,
    }
  ]
  nuevo: Personaje ={
    nombre: 'toshi',
  poder: 12,
  }

  agregarNuevoPersonaje(){
    console.log("main page component")
  }
}
