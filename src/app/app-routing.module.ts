import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { AddMetricComponent } from './metric/add-metric.component';


const routes: Routes = [
{ path: '', component: AuthComponent },
{ path: 'home', component: HomeComponent},
{ path: 'auth',component: AuthComponent },
{ path: 'add',component: AddMetricComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
