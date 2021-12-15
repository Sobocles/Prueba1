import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  show:number=1;
  //form1
  nombre:any;
  edad:any;
  email:any;
  fnac:any;
  sexo:any;
  //form2
  estatura:any;
  peso:any;
  Seleccionado: boolean = true;
  esCardiaco: any;
  esRespiratorio: any;
  esCirugia: any;
  esAlergia: any;
  esDegenerativa: any;
  esRepetida: any;
  //form3
  FUT:any;
  BAL:any;
  VOL:any;
  SAL:any;
  ZUM:any;
  FOL:any;

  constructor() { }

  ngOnInit(): void {
  }
  showModal(){
    
  }
  async esLetra(e:any){
    const char = String.fromCharCode(e.keyCode);
    if(/^[A-Za-z ]+$/.test(char)) {return true;}
    else {e.preventDefault();}
    return;
  }
  async esNumero(e:any){
    const char = String.fromCharCode(e.keyCode);
    if(/^[0-9]+$/.test(char)) {return true;}
    else {e.preventDefault();}
    return;
  }
  async form1valid(){

    return this.show=2;
  }
}
