import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorRoutingModule } from './calculator-routing.module';
import { CalculatorContainerComponent } from './components/calculator-container/calculator-container.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CalculatorContainerComponent],
  imports: [CommonModule, CalculatorRoutingModule, SharedModule],
})
export class CalculatorModule {}
