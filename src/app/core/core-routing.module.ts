import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// This routing module only exists so that we can use routerLink directives in the nav bar of
// the header component- there is nothing in this component we need to actually route to.

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
