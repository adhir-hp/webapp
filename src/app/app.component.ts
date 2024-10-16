import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompComponent } from './comp/comp.component';
import { Comp3Component } from './comp3/comp3.component';
import { sample } from 'rxjs';

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

  // Property Binding
  isDisabled = true;

  // class Binding
  myClasses1 = 'success height40';
  // used array
  myClasses2 = ['success','height40'];
  myClasses3 = {'success':this.isDisabled, 'height40':false}; //Add conditions
  myClasses = {'success':this.isDisabled, 'height40':this.foo()}; //Add conditions

  // Attribute binding
  src = "https://images.unsplash.com/photo-1721332154373-17e78d19b4a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8";
  width = "200"

  // Style Binding
  textStyle = {'color':'red','font-style':'italic'};

  textId = "sampleId";

  foo():boolean{
    return true;

  }

  // Event Binding
  clickSave():void{
    // alert('Hello from App');
    this.name = "Text Clicked";
  }

  over():void{
    this.name = "Text Over";
  }

  txtChange():void{
    this.name = "Text Changed";
  }


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
