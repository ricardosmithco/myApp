import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  phones: any[] = [
    {name: "Samsung", price: 700, specs: {memory: 256, screenSize: "large"} },
    {name: "Apple", price: 650, specs: {memory: 128, screenSize: "medium"} },
    {name: "LG", price: 500, specs: {memory: 64, screenSize: "small"} }
  ];

  @Output() onRegister = new EventEmitter<any>();

  purchasePhone(phone: any){
    this.onRegister.emit(phone);
  }

}
