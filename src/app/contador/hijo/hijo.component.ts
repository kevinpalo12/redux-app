import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { DividirAction, MultiplicarAction } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [
  ]
})
export class HijoComponent implements OnInit {
contador:number;
  // @Input() contador : number;
  // @Output() cambioContador = new EventEmitter<number>();
  constructor(private store:Store<AppState>) {
    this.contador=0;
    this.store.select('contador').subscribe(contador =>{
      this.contador=contador;
    });
   }

  ngOnInit(): void {

  }

  multiplicar(){
    const accion = new MultiplicarAction(5);
    this.store.dispatch(accion);
    // this.contador*=2;
    // this.cambioContador.emit(this.contador);
  }
  
  dividir(){
    const accion = new DividirAction(5);
    this.store.dispatch(accion);
    // this.contador/=2;
    // this.cambioContador.emit(this.contador);
  }

  resetNieto(nuevoContador:number){
    this.contador= nuevoContador;
    // this.cambioContador.emit(this.contador);
  }
}
