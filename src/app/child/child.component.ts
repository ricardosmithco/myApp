import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit() {
  }

  @Input() title = "Im a nested component";

  ngOnChanges(changes){
    console.log('changes in child:' + JSON.stringify(changes));
  }

}
