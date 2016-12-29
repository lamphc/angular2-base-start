/**
 * Created by lamph on 2016/12/26.
 */
export class Todo {
    id: number;
    title: string = '';
    createdDate: Date = new Date();
    complete: boolean = false;

    constructor() {  }
}