import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import {RenderComponent} from "../render/render.component";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.sass', '../../../node_modules/materialize-css/dist/css/materialize.css']
})
export class FilterComponent implements OnInit {

  valid:any;

  constructor(private _router: Router) { }

  getForm(form: NgForm) {
    this._router.navigate( [`search/${form.value.name}/${form.value.type}`]);
    console.log(form.value);
  }

  getValid(form: NgForm):any {
    if( form.value.name == '' || form.value.type == '' ) {
      return false
    }
    return true;
  }

  ngOnInit() {
  }

}
