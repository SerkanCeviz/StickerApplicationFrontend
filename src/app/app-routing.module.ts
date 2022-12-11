import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {FriendComponent} from "./friend/friend.component";
import {AddPackageComponent} from "./add-package/add-package.component";
import {ProfileComponent} from "./profile/profile.component";
import {HomepageComponent} from "./homepage/homepage.component";


const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'friend', component: FriendComponent},
  {path:'packages', component: AddPackageComponent},
  {path:'profile', component: ProfileComponent},
  {path:'home', component: HomepageComponent},
  {path:'', redirectTo:'home',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
