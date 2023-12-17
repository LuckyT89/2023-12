import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// We want the calculator module to be the default landing page so the main path of '' will redirect to the /calculator path
// The wild card ** will also catch any other random routes that don't exist and redirect to the /calculator path
const routes: Routes = [
  { path: '', redirectTo: '/calculator', pathMatch: 'full' },
  { path: '**', redirectTo: '/calculator', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
