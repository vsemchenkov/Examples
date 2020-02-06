import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

export interface ItemModel {
  id: number,
  name: string,
  type: string
}

@Injectable({
  providedIn: 'root'
})
export class ItemModelService {

  _item = new BehaviorSubject<ItemModel[]>([]);
  dataStore: ItemModel[] = [
    { id: 1, name: 'One', type: '1'},
    { id: 2, name: 'Two', type: '2'},
    { id: 3, name: 'Three', type: '3'},
    { id: 4, name: 'Four', type: '4'},
    { id: 5, name: 'Five', type: '5'},
    { id: 6, name: 'Six', type: '6'},
    { id: 7, name: 'Seven', type: '7'},
    { id: 8, name: 'Eight', type: '8'},
    { id: 9, name: 'Nine', type: '9'},
    { id: 10, name: 'Ten', type: '10'},
    ];

  constructor() { }

}
