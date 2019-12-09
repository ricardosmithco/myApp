import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuthenticated: boolean;
  submitted: boolean = false;
  username: string;
  myMessage: string = "badman a badman"

  colorName: string = 'yellow';
  color: string = 'red';
  borderStyle = '1px solid black';
  isBordered: boolean = true;
  isColor: boolean = true;

  onSubmit(name: string, password: string): void{
    this.submitted = true;
    this.username = name;
    if(name==="admin" && password ==="admin"){
      this.isAuthenticated = true;
    }else{
      this.isAuthenticated = false;
    }
  }

  courses: any[] = [
    {id: 1, name: "History"},
    {id: 23, name: "Geography"},
    {id: 26, name: "Computer Science"}
  ]

  value: number = 0;
  increaseValue(){
    this.value++;
    if(this.value === 5){
      this.value = 0;
    }
  }

  show: boolean = false;
  showOrHideCourseTable(){
    this.show = !this.show;
  }
}




