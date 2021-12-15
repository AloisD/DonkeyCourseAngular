
import { Routes } from '@angular/router';
import { AppCreateDonkeyComponent } from "./app-create-donkey/app-create-donkey.component";
import { AppComponent } from "./app.component";


const ROUTES: Routes = [
  { path: '', component: AppComponent },
  { path: 'create', component: AppCreateDonkeyComponent }
];

export { ROUTES };
