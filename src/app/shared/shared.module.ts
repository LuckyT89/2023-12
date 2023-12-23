import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

// All Angular Material modules we want to use must be added to the imports array and then also added to
// the exports array so that other modules that use this shared module can use them.

@NgModule({
  declarations: [],
  imports: [CommonModule, MatIconModule, MatSliderModule, MatSlideToggleModule],
  exports: [MatIconModule, MatSliderModule, MatSlideToggleModule],
})
export class SharedModule {}
