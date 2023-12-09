import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactsContainerComponent } from './components/facts-container/facts-container.component';

const routes: Routes = [{ path: 'facts', component: FactsContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FactsRoutingModule {}
