import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-todo';
  todoArray=[]
  addTodo(value){
    this.todoArray.push(value)
    console.log(this.todoArray)
  }
  deleteItem(index){
    this.todoArray.splice(index, 1)
    console.log("delete item")
  }
}
