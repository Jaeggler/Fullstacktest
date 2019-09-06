import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { UserEditComponent } from './useredit/useredit.component';
import { UserListComponent } from './userlist/userlist.component';
import { UserAddComponent } from './useradd/useradd.component';
import { AppRoutingModule } from './app-routing.module';
import { ClientDataService } from './services/clientdata.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    UserEditComponent,
    UserListComponent,
    UserAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ClientDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
