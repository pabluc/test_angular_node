import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {CustomerComponent} from "./customer/customer.component";
import {CommentsComponent} from "./comments/comments.component";
import {ProjectsComponent} from "./projects/projects.component";


const appRoutes: Routes = [
  { path: 'front/login', component: LoginComponent},
  { path: 'front/customer', component: CustomerComponent},
  { path: 'front/projects/:id/comments', component: CommentsComponent},
  { path: 'front/projects', component: ProjectsComponent},
  { path: '', redirectTo: 'front/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'front/login'}
];

export const Routing = RouterModule.forRoot(appRoutes);