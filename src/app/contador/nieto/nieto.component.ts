import { Component,OnInit, } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { ResetAction } from '../contador.actions';
import { contadorReducer } from '../contador.reducer';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: [
  ]
})
export class NietoComponent implements OnInit {
contador:number;
  constructor(private store:Store<AppState>) { 
     this.contador=10;
    this.store.select('contador').subscribe(contador=>{
      this.contador=contador;
    });
  }

  ngOnInit(): void {
  }
  reset(){
    const accion = new ResetAction();
    this.store.dispatch(accion);
    // this.contador=0;
    // this.contadorCambio.emit(0);
  }

}
