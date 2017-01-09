/**
 * Created by lamph on 2017/1/9.
 */
import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from './question-base.model';

@Injectable()
export class QuestionControlService {
    constructor() { }

    toFormGroup(questions: QuestionBase<any>[] ) {
        let group: any = {};

        questions.forEach(question => {
            group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                : new FormControl(question.value || '');
        });
        return new FormGroup(group);
    }
}
