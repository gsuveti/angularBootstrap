import {Component} from "@angular/core";
import ItemsProvider from "./data/items";

@Component(
  {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
  }
)
export class AppComponent {

  title = 'Just another social platform';
  items: any[] = [];


  constructor() {
    this.items = ItemsProvider.getItems();
  }
}
