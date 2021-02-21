import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import MOVIES from './movies.json';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private _movies: any[] = MOVIES;

  private _categoriesBehaviorSubject = new BehaviorSubject<string>('Todos os Filmes');

  constructor() { }

  changeCategory(category: string) {
    this._categoriesBehaviorSubject.next(category);
  }

  getCategory() {
    return this._categoriesBehaviorSubject;
  }

  getMovies() {
    return this._movies;
  }
}
