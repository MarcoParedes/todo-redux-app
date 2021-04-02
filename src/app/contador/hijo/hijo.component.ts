import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {

  @Input() contador: number;
  @Output() cambiarContador = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  multiplicar() {
    this.contador *= 2;
    this.cambiarContador.emit(this.contador);
  }

  dividir() {
    this.contador /=2;
    this.cambiarContador.emit(this.contador);
  }

  resetNieto(contador) {
    this.contador = contador;
    this.cambiarContador.emit(this.contador);
  }

}
