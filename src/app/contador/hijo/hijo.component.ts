import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import * as actions from 'src/app/contador/contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {

  contador: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('contador')
      .subscribe(contador => this.contador = contador);
  }

  multiplicar() {
    this.store.dispatch(actions.multiplicar({ numero: 3 }));
    // this.contador *= 2;
    // this.cambiarContador.emit(this.contador);
  }

  dividir() {
    this.store.dispatch(actions.dividir({numero: 3}));
    // this.contador /=2;
    // this.cambiarContador.emit(this.contador);
  }

  resetNieto(contador) {
    // this.contador = contador;
    // this.cambiarContador.emit(this.contador);
  }

}
