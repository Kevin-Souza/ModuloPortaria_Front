import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home',shortLabel:'Home' ,link:'/' },
    {label: 'Visitante', shortLabel:'Visitante', link:"/visitantes"}
  ];

  private onClick() {
    alert('Clicked in menu item')
  }

}
