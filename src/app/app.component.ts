import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   
   usuarios = [];

   constructor(){

    this.usuarios =[ {nombre:'admin',clave:'123'},
                     {nombre:'pepe',clave:'123'},
                     {nombre:'tito',clave:'123'} ];

    localStorage.setItem('usuarios', JSON.stringify(this.usuarios));

   }
}
