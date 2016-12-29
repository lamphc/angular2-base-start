/**
 * Created by lamph on 2016/12/26.
 */
import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable()
export class TodoService {
    //自增ID,保存最后一个生成的ID
    lastId: number = 0;
    todos: Todo[] = [];//保存任务列表
    completeTotal:number = 0;


    constructor() {  }

    //添加任务
    addTodo(todo: Todo): TodoService {
        if(!todo.id) {
            todo.id = ++this.lastId;
        }
        this.todos.push(todo);
        return this;
    }

    //根据ID删除一个任务
    delTodoById(id: number):TodoService{
        this.todos = this.todos.filter(todo => todo.id!== id);
        return this;
    }

    //更新一个任务
    updateTodoById(id: number, values:Object = {}):Todo{
        let todo = this.getTodoById(id);
        if(!todo) {
            return null;
        }
        Object.assign(todo, values);
        return todo;
    }

    //获取任务列表
    getTodos():Todo[] {
        return this.todos;
    }

    //标记任务已完成/未完成
    toggleTodoComplete(todo:Todo) {
        let updatedTodo = this.updateTodoById(todo.id, {complete: !todo.complete});
        return updatedTodo;
    }

    //根据ID获取一个任务
    getTodoById(id: number):Todo{
        return this.todos.filter(todo => todo.id === id).pop();
    }

    //获取完成任务数量
    getCompleteTotal() {
        let completeTodo = this.todos.filter(todo => todo.complete === true);
        this.completeTotal = completeTodo.length;
        return this.completeTotal;
    }
}
