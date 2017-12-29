import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  rForm : FormGroup;
  post:any;
  rfc:string = '';
  nombre:string = '';
  noExterno:number ;
  noInterno:number  ;
  colonia:string = '';
  estado:string = '';
  cp:number  ;
  mail:string = '';
  banco:string = '';
  ctaBanco:number ;
  telefono:number ;

  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'rfc':[null, Validators.required],
      'nombre':[null, Validators.required],
      'noExterno':[null, Validators.required],
      'colonia':[null, Validators.required],
      'estado':[null, Validators.required],
      'cp':[null, Validators.required],
      'mail':[null, Validators.required],
      'banco':[null, Validators.required],
      'ctaBanco':[null, Validators.compose([Validators.required, Validators.minLength(5),Validators.maxLength(500)])],
      'telefono':[null, Validators.required],
      'validate': ''
    });
  }
  addPost(post){
    this.rfc = post.rfc;
    this.nombre = post.nombre;
    this.noExterno = post.noExterno;
    this.noInterno = post.noInterno;
    this.colonia = post.colonia;
    this.estado = post.estado;
    this.cp = post.cp;
    this.banco = post.banco;
    this.ctaBanco = post.ctaBanco;
    this.mail = post.mail;
    this.telefono = post.telefono;
  }
  ngOnInit() {
    console.log('Pantalla de Formulario de proveedores ');
  }
}
