import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss']
})
export class WatchComponent implements OnInit {

  movie: any;
  movieId: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private appService: AppService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.movieId = params.get('movieId');
      this.movie = this._filter(this.movieId);
      if (!this.movie) {
        this.router.navigate(['/']);
      }
    });
  }

  private _filter(movieId: string): any {
    if (!movieId) {
      return;
    }
    return this.appService.getMovies().find(movie => movie.id.includes(movieId));
  }

}
