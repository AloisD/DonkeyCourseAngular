import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { ValidationButtonComponent } from './validation-button/validation-button.component';
import { BlockComponentComponent } from './block-component/block-component.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MenuComponent } from './menu/menu.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AppCreateDonkeyComponent } from './app-create-donkey/app-create-donkey.component';
import { AppListDonkeyComponent } from './app-list-donkey/app-list-donkey.component';
import { AppUserDonkeyComponent } from './app-user-donkey/app-user-donkey.component';

@NgModule({
  declarations: [
    AppComponent,
    ValidationButtonComponent,
    BlockComponentComponent,
    UserProfileComponent,
    MenuComponent,
    SignUpComponent,
    AppCreateDonkeyComponent,
    AppListDonkeyComponent,
    AppUserDonkeyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
