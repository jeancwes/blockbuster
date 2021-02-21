import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, pipe } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  formControl = new FormControl();

  options: any[];

  filteredOptions: Observable<any[]>;

  constructor(
    private _appService: AppService,
    public router: Router
  ) { }

  ngOnInit() {
    this.options = this._appService.getMovies();
    this.filteredOptions = this.formControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): any[] {
    if (value == '') {
      return [];
    }
    if (typeof value != 'string') {
      return;
    }
    const filterValue = value.toLowerCase();
    return this.options.filter(option =>
      option.name.toLowerCase().includes(filterValue));
  }

  displayWith(element) {
    return element ? element.name : '';
  }

  navigate(movieId): void {
    this.router.navigate(['/watch/' + movieId]);
    this.formControl.setValue('');
  }

}
