import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CalculatorModule } from './feature-modules/calculator/calculator.module';
import { FactsModule } from './feature-modules/facts/facts.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CalculatorModule,
    FactsModule,
    AppRoutingModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
