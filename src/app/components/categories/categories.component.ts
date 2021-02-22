import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import categories from '../../categories.json';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  @Input() drawer: MatDrawer;
  @Input() isMobile: boolean;
  @ViewChild('categories') categories; 

  movieCategories: string[] = categories;

  constructor(
    private _appService: AppService,
    public router: Router
  ) { }

  ngOnInit(): void {}

  changeCategory(category: string) {
    this._appService.changeCategory(category);
    if (this.isMobile) {
      this.drawer.toggle();
    }
  }

}
