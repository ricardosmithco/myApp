import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-computer-list',
  templateUrl: './computer-list.component.html',
  styleUrls: ['./computer-list.component.css'],
  exportAs: 'computerList'
})
export class ComputerListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  computers: any[] = [
    {name: "Dell", price: 1200},
    {name: "HP", price: 850},
    {name: "Apple", price: 1725}
  ];

  comp: any[];

  @Input() set setComputerName(name: string){
    this.comp = [];
    for(var i = 0; i < this.computers.length ; i++){
      if(this.computers[i].name === name){
        this.comp.push(this.computers[i]);
      }
    } 
  }

  @Output() onRegister = new EventEmitter<String>();

  buy(computerName: string){
    this.onRegister.emit(computerName);
  }

}
