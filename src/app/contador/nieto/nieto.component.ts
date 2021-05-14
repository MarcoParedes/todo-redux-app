import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';
import { reset } from 'src/app/contador/contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit {

  contador: number;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('contador')
      .subscribe(contador => this.contador = contador);
  }

  reset() {
    this.store.dispatch(reset());
    // this.contador = 0;
    // this.contadorCambio.emit(this.contador);
  }

}
