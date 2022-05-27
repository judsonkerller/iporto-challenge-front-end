import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  title = 'BALAS 7 BELO';
  subtitle = 'DESDE 1960 A MELHOR BALA FABRICADA NO BRASIL.';
  
  constructor() { }

  ngOnInit(): void {
  }

}
