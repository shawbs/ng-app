import {RouterModule,Routes} from '@angular/router';
import { NgModule } from '@angular/core';

//component
import {NotFoundComponent} from '../component/notfound/notfound';
import {LoginComponent} from '../component/login/login';
import {HomeComponent} from '../component/home/home';


const appRoutes:Routes = [
    { path:'login/:id', component:LoginComponent},
    { path:'home', component:HomeComponent},
    { path:'', redirectTo:'/home',pathMatch: 'full'},
    { path:'**', component:NotFoundComponent},
    
];

@NgModule({
    declarations: [
        NotFoundComponent,
        LoginComponent,
        HomeComponent
    ],
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRouteModule{}
