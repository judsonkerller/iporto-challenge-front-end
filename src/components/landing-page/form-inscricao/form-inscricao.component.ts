import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationMessageUtil } from 'src/shared/dto/validation-dtos';
import { FormInscricaoEndpoint } from './form-inscricao.endpoint';

@Component({
  selector: 'app-form-inscricao',
  templateUrl: './form-inscricao.component.html',
  styleUrls: ['./form-inscricao.component.css'],
  providers: [FormInscricaoEndpoint]
})
export class FormInscricaoComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(protected fb: FormBuilder,
    protected requisicao: FormInscricaoEndpoint) { 
  }

  ngOnInit(): void {
    this._initForm();
  }

  get msg() {
    return this.requisicao.msg;
  }

  private _initForm() {
    this.formGroup = this.fb.group({
      name: ['', {
        validators: [Validators.required, Validators.maxLength(100)], updateOn: 'blur'
      }],
      email: ['', {
        validators: [Validators.required, Validators.email, Validators.maxLength(100)], updateOn: 'blur'
      }],
      telefone: ['', {
        validators: [Validators.required, Validators.maxLength(100)], updateOn: 'blur'
      }],
      gender: ['', {
        validators: [Validators.required], updateOn: 'blur'
      }],
      status: ['']
    })
  }

  cadastrar() {
    if (this.formGroup.valid) {
      this.requisicao.cadastrar(this.formGroup.getRawValue());
    }
  }

  genders = [
    {id: 'female', name: "Feminino"},
    {id: 'male', name:"Masculino"}    
  ];
  selectedValue: any=null;
  
  userStatus = [
    {id: 'inactive', name: "Inativo"},
    {id: 'active', name:"Ativo"}    
  ];
  selectedValues: any=null;
}