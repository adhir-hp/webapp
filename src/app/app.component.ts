import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompComponent } from './comp/comp.component';
import { Comp3Component } from './comp3/comp3.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    Comp3Component

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'webapp';
  
  // Var
  name:string = 'sample';

  // list
  employees = ['jhon','saram','raj']

  // obj json
  employee = {
    title:'Software engineer',
    name: 'Saran',
    salary:40000,
    src:'https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=1500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt:'Profile Pic'

  }


  // Method
  getName():string{
    return 'HEllo from method';
  }

  getlname(data:number):string{
    if(data == 1){
      return 'hello from method 1'
    }else{
      return 'Hello '+data;
    }
  }
}
