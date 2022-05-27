import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { IValidationMessageDto, ValidationMessageUtil } from '../dto/validation-dtos';


@Component({
  selector: 'app-field-validation',
  templateUrl: './field-validation.component.html',
  styleUrls: ['./field-validation.component.css'],
  providers: [ValidationMessageUtil]
})
export class FieldValidationComponent{

  @Input() field: AbstractControl;

  constructor(private validationMessageUtil: ValidationMessageUtil) { 

  }

  get messages(): IValidationMessageDto[] {
    return this.validationMessageUtil.arrValidations;
  }

  public hasError(errorType: string): boolean {
    return this.field.hasError(errorType);
  }

  public hasErrors(): boolean {
    return this.field.errors && (this.field.dirty || this.field.touched);
  }

  public showErrorMsg(error: IValidationMessageDto){
    return error.message;
  }

}
