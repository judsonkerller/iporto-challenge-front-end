import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldValidationComponent } from './field-validation/field-validation.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FieldValidationComponent,
    FormFieldComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FieldValidationComponent,
    FormFieldComponent
  ]
})
export class SharedModule { }
