import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormsPrimeNGUIModule } from '@ng-dynamic-forms/ui-primeng';
import { HttpClientModule } from '@angular/common/http';
import { DynamicSubFormComponent } from './dynamic-sub-form/dynamic-sub-form.component';
import { PrimengModule } from './primeng.module';
import { ValidationMessageComponent } from './validation-message/validation-message.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicSubFormComponent,
    ValidationMessageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicFormsPrimeNGUIModule,
    PrimengModule,
  ],
  exports: [AppComponent],
})
export class AppModule {}
