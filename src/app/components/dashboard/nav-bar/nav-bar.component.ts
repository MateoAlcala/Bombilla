import { menu } from './../../../../interfaces/menu';
import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  Menu: menu[] = [];

  constructor(private menuS: MenuService) { }

  ngOnInit(): void {
    this.cargarMenu();
  }

 cargarMenu() {
  this.menuS.getMenu().subscribe(data => {
    this.Menu = data;
  })
 
 }

}
