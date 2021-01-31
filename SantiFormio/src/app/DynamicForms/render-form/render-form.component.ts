import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Formio, FormioForm, FormioRefreshValue } from 'angular-formio';
import * as EventEmitter from 'events';


const url_form = 'assets/exampleForm.json'

@Component({
  selector: 'app-render-form',
  templateUrl: './render-form.component.html',
  styleUrls: ['./render-form.component.scss']
})
export class RenderFormComponent implements OnInit {

  myForm: FormioForm = {};
  data: any = {};
  datos = {
    "campo1": "Santi",
    "campo2": "Reinoso",
    "campo3": {
      s: true,
      n: false
    } 
  };

  constructor(private http: HttpClient ) { }

  ngOnInit(): void {  
    this.data.data = this.datos;
    console.log(this.data);
    this.http.get(url_form).subscribe(res =>{
      this.myForm = res;
      console.log(this.myForm);

      Formio.createForm(document.getElementById('formio'), this.myForm).then(function(form){
        form.nosubmit = true;
        form.on('submit', function(submission: any){
          console.log('Datos Submision', JSON.stringify(submission));    
        });      
      });  
    });

  }

  onSubmit(submision: any){
    console.log('Enviados desde el formulario -->', JSON.stringify(submision.data));
  }

  loadForm(){
    setTimeout('', 5000);
    alert('Se ha cargado el formu ' + this.myForm.title)
  }

}
