import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Movie } from '../Movie';
/* import { isRequiredValidator } from '../isRequiredValidator';
 */

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {
  searchMovieForm = this.fb.group({
    movie: this.fb.group({
      id: [''],
      title: ['']
    }/* , { validators: isRequiredValidator } */),
    type: ['', Validators.required],
    year: ['', Validators.required],
    information: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const searchedMovie: Movie = this.searchMovieForm.value;
    console.log(searchedMovie);
  }

}
