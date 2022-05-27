import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DepoimentosEndpoint } from './depoimentos.endpoint';

@Component({
  selector: 'app-depoimentos',
  templateUrl: './depoimentos.component.html',
  styleUrls: ['./depoimentos.component.css'],
  providers: [DepoimentosEndpoint, HttpClient]
})
export class DepoimentosComponent implements OnInit {

  constructor(private requisicao: DepoimentosEndpoint) { 
    
  }

  get comments () {
    return this.requisicao.values;
  }

  ngOnInit(): void {
    this.requisicao.depoimentos();
  }

}
