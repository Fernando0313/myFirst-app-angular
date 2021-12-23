import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
    <h1>aea</h1>
<h3>La base es: <strong> {{base}} </strong></h3>


<button (click)="numero = numero + 1">+1</button>

<span> {{numero}} </span>

<button (click)="numero = numero -1">-1</button>
    `
})
export class ContadorComponent{
    title = 'bases';
    numero: number = 10;
    base: number = 5;
    cumular(valor: number){
      this.numero += valor;
    }
}