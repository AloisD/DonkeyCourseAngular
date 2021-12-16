
import { Routes } from '@angular/router';
import { AppCreateDonkeyComponent } from "./app-create-donkey/app-create-donkey.component";
import { SignUpComponent } from './sign-up/sign-up.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';


const ROUTES: Routes = [
  { path: 'create', component: AppCreateDonkeyComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'searchmovie', component: SearchMovieComponent }
];

export { ROUTES };
