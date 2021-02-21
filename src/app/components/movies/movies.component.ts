import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  categoriesSubscription: Subscription;

  movies: any[];

  constructor(private _appService: AppService) { }

  ngOnInit(): void {
    this.movies = this._appService.getMovies();
    this.categoriesSubscription = this._appService.getCategory()
      .subscribe(category => {
        this.movies = this._filter(category);
      });
  }

  ngOnDestroy() {
    if (this.categoriesSubscription)
      this.categoriesSubscription.unsubscribe();
  }
  
  private _filter(category: string): any[] {
    if (category == 'Todos os Filmes') {
      return this._appService.getMovies();
    }
    const filterValue = category.toLowerCase();
    return this._appService.getMovies()
      .filter(movie => movie.category.toLowerCase().includes(filterValue));
  }

}
