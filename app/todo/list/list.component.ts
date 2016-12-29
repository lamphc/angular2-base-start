/**
 * Created by lamph on 2016/12/26.
 */
import { Component, OnInit } from '@angular/core';

import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';


@Component({
    selector:'todo-list',
    templateUrl:'app/todo/list/list.component.html',
    styleUrls:['app/todo/list/list.component.css']
})

export class TodoListComponent implements OnInit{
    newTodo: Todo = new Todo();

    constructor(private todoService: TodoService){  }

    ngOnInit() {
        if(!this.todos.length) {
            for(let i=0,j=6;i<j;i++) {
                if(i>=0 && i<2) this.newTodo.complete = true;
                this.newTodo.title = `todoItem-${i}`;
                this.addTodo();
            }
       }

    }

    addTodo() {
        if(!this.newTodo.title) return;
        this.todoService.addTodo(this.newTodo);
        this.newTodo = new Todo();
    }

    get todos() {
        return this.todoService.getTodos();
    }

    get completeTotal() {
        return this.todoService.getCompleteTotal();
    }

}
