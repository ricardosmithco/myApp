import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
         AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked,
                                     AfterViewInit, AfterViewChecked, OnDestroy {

  isAuthenticated: boolean;
  submitted: boolean = false;
  username: string;
  myMessage: string = "badman a badman"

  colorName: string = 'yellow';
  color: string = 'red';
  borderStyle = '1px solid black';
  isBordered: boolean = true;
  isColor: boolean = true;

  imageUrl: string = "https://images.unsplash.com/photo-1575081151297-19c23575e91b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
  columnJoin: number = 2
  
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

  message: string;
  buyComputer(computerName: string){
    this.message = `You have selected to buy this ${computerName}, for is this correct?` ;
  }

  invoice: any[];
  purchase(phone: any){
    this.invoice = [];
    this.invoice.push(phone);
  }

  // Here below is our exploration of various lifecycle methods:

  data: string = "Angular 2";

  ngOnInit(){
    console.log('Init');
  }

  ngDoCheck(){
    console.log('Change detected');
  }

  ngAfterContentInit(){
    console.log("After content init");
  }

  ngAfterContentChecked(){
    console.log('After content checked');
  }

  ngAfterViewInit(){
    console.log('After view init');
  }

  ngAfterViewChecked(){
    console.log('After view checked');
  }

  ngOnDestroy(){
    console.log('Destroy');
  }
}




