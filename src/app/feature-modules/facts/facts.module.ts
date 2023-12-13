import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FactsRoutingModule } from './facts-routing.module';
import { FactsContainerComponent } from './components/facts-container/facts-container.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [FactsContainerComponent],
  imports: [CommonModule, FactsRoutingModule, SharedModule],
})
export class FactsModule {}
