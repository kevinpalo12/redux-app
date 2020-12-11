
import { Component } from '@angular/core';
import { Store} from '@ngrx/store';
import { AppState } from './app.reducers';
//import { DecrementarAction, IncrementarAction } from './contador/contador.actions';
import * as fromCOntador from './contador/contador.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'redux-app';
  contador: number;
  constructor(private store: Store<AppState>) {
    this.contador=10;
    this.store.select('contador').subscribe(contador => {
      this.contador=contador;
      
    });
    
  }

  incrementar() {
    //this.contador++;
    //const accion: Action = {
    //  type: 'INCREMENTAR'
    //};
    const accion = new  fromCOntador.IncrementarAction();
    this.store.dispatch(accion);
  }

  decrementar() {
    //this.contador--;
    //const accion: Action = {
    //  type: 'DECREMENTAR'
    //};
    const accion = new  fromCOntador.DecrementarAction();
    this.store.dispatch(accion);
  }
}
