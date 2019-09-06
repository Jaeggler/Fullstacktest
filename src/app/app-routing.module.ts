import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddComponent } from './useradd/useradd.component';
import { UserListComponent } from './userlist/userlist.component';

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'add', component: UserAddComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
