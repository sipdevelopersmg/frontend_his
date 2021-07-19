import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

declare global {
    interface Array<T> {
        sum(prefix: any): Array<T>;
    }
}

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    formExample: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.formExample = this.formBuilder.group({
            example: [""]
        })
    }

    ngOnInit(): void {

    }

    onSubmitFormExample(formExample: any) {
        console.log(formExample);
    }

    get example() { return this.formExample.get("example") };
}
