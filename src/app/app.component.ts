import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home',shortLabel:'Home',icon:'po-icon-warehouse' ,link:'/' },
    {label: 'Visitante', shortLabel:'Visitante',icon:'po-icon-user', link:"/visitantes"}
  ];

  

}
