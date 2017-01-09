/**
 * Created by lamph on 2017/1/9.
 */
import { QuestionBase } from './question-base.model';

export class TextboxQuestion extends QuestionBase<string> {
    controlType = 'textbox';
    type: string;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
    }
}
