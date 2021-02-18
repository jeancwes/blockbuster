import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies = [
    {
      name: 'movie 1',
      year: '2020',
      director: 'director 1',
      genre: 'genre 1',
      description: 'description 1',
      image: ''
    },
    {
      name: 'movie 2',
      year: '2020',
      director: 'director 2',
      genre: 'genre 2',
      description: 'description 2',
      image: ''
    },
    {
      name: 'movie 3',
      year: '2020',
      director: 'director 3',
      genre: 'genre 3',
      description: 'description 3',
      image: ''
    },
    {
      name: 'movie 4',
      year: '2020',
      director: 'director 4',
      genre: 'genre 4',
      description: 'description 4',
      image: ''
    },
    {
      name: 'movie 5',
      year: '2020',
      director: 'director 5',
      genre: 'genre 5',
      description: 'description 5',
      image: ''
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  view() {

  }

}
