import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})
export class FormFieldComponent implements OnInit {

  @Input() id: string;
  @Input() label: string;

  @Input() formGroup: FormGroup;
  @Input() controlName: string;
  @Input() fieldAbstractControl: AbstractControl;

  constructor() { }

  ngOnInit(): void {
  }

}
