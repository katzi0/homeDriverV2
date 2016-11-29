import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DriversModule } from './drivers/drivers.module';

const routes: Routes = [
 // { path: '', redirectTo:'test' , pathMatch:'full'},
  { 
    path: 'drivers', 
    component: DriversModule,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// import { NgModule }             from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

// export const routes: Routes = [
//   { path: '', redirectTo: 'contact', pathMatch: 'full'},
//   { path: 'crisis', loadChildren: 'app/crisis/crisis.module#CrisisModule' },
//   { path: 'heroes', loadChildren: 'app/hero/hero.module#HeroModule' }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {}