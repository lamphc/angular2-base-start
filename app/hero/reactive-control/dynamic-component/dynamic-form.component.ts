/**
 * Created by lamph on 2017/1/9.
 */
import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';
import { QuestionBase }              from '../question-base.model';
import { QuestionControlService }    from '../question-control.service';
@Component({
    // moduleId: module.id,
    selector: 'dynamic-form',
    templateUrl: 'app/hero/reactive-control/dynamic-component/dynamic-form.component.html',
    providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {
    @Input() questions: QuestionBase<any>[] = [];
    form: FormGroup;
    payLoad = '';
    constructor(private qcs: QuestionControlService) {  }
    ngOnInit() {
        this.form = this.qcs.toFormGroup(this.questions);
    }
    onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);
    }
}
