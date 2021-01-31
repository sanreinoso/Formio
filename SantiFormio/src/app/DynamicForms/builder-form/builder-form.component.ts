import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormioForm } from 'angular-formio';

@Component({
  selector: 'app-builder-form',
  templateUrl: './builder-form.component.html',
  styleUrls: ['./builder-form.component.scss']
})
export class BuilderFormComponent implements OnInit {
  @ViewChild('json', { static: true }) jsonElement?: ElementRef;

  public form: FormioForm = {
    components: []
  };

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event: any) {
    this.jsonElement.nativeElement.innerHTML = '';
    this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(event.form, null, 4)));
    console.log(this.jsonElement.nativeElement.innerHTML);
  }

}
