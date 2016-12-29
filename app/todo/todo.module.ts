/**
 * Created by lamph on 2016/12/26.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoListComponent } from './list/list.component';
import  { TodoDetailComponent } from './detail/detail.component';
import { TodoItemComponent } from './item/item.component';
import { TodoService } from './todo.service';

@NgModule({
    imports:[CommonModule, FormsModule],//ng2 module
    declarations:[TodoListComponent, TodoDetailComponent, TodoItemComponent],//module child component
    providers:[TodoService]
})

export class TodoModule {}