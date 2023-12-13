import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

// All Angular Material modules we want to use must be added to the imports array and then also added to
// the exports array so that other modules that use this shared module can use them.

@NgModule({
  declarations: [],
  imports: [CommonModule, MatSliderModule, MatSlideToggleModule],
  exports: [MatSliderModule, MatSlideToggleModule],
})
export class SharedModule {}
