/**
 * Created by lamph on 2016/12/26.
 */
import { Component, Input } from '@angular/core';
import  { Router } from '@angular/router';

import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
    selector:'todo-item',
    templateUrl: 'app/todo/item/item.component.html',
    styleUrls:['app/todo/item/item.component.css']
})

export class TodoItemComponent {
    @Input() todo:Todo;

    constructor(private todoService:TodoService, private router: Router) {}

    //跳转详情页
    gotoDetail(todo) {
        this.router.navigate(['todo/detail', todo.id]);
    }

    //标记任务完成/未完成
    toggleTodoComplete(todo) {
        this.todoService.toggleTodoComplete(todo);
    }

    //删除一个任务
    removeTodo(todo) {
        this.todoService.delTodoById(todo.id);
    }


}

