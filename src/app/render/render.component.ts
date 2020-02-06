import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {ItemModel, ItemModelService} from "../item-model.service";

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.sass', '../../../node_modules/materialize-css/dist/css/materialize.css']
})
export class RenderComponent implements OnInit {

  name: any;
  type: any;
  dataStorage: ItemModel[];
  labels: any;


  constructor(private activeRoute: ActivatedRoute, private _service: ItemModelService) {

  }

  getParams() {
    this.activeRoute.params.subscribe((data:any) => {
      this.name = data.name;
      this.type = data.type;
    });
  }

  SortStorage() {
    this.labels = this.dataStorage.filter((item) => {
      if(item.name.toLowerCase() == this.name.toLowerCase() || item.type.toLowerCase() == this.type.toLowerCase()) {
        return item;
      }
    });
  }


  ngOnInit() {
    this.dataStorage = this._service.dataStore;
    this.getParams();
    this.SortStorage();
  }
  ngAfterContentChecked () {
    this.SortStorage();
  }



}
