import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formControl';
  formEnviar!:FormGroup;

  constructor(){
    
    this.formEnviar = new FormGroup
    ({
      pregunta1: new FormControl(),
      pregunta2: new FormControl(),
      pregunta3: new FormControl(),
      pregunta4: new FormControl(),
    })
  }


  enviar(){
    //Los valores del formulario es: 
    console.log(this.formEnviar.value)
  }
}

