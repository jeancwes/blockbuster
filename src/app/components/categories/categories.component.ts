import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import categories from '../../categories.json';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  @ViewChild('categories') categories; 

  movieCategories: string[] = categories;

  constructor(
    private _appService: AppService,
    public router: Router
  ) { }

  ngOnInit(): void {}

  ngAfterViewInit() {
    console.log(this.router);
    console.log(this.categories);
  }

  changeCategory(category: string) {
    this._appService.changeCategory(category);
  }

}
