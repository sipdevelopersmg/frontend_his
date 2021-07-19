import {
    Component,
    forwardRef,
    HostBinding,
    Input,
    OnInit,
} from '@angular/core';
import {
    ControlValueAccessor,
    NG_VALUE_ACCESSOR,
    NgModel,
    FormControl,
} from '@angular/forms';

@Component({
    selector: 'mol-input-text',
    templateUrl: './mol-input-text.component.html',
    styleUrls: ['./mol-input-text.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => MolInputTextComponent),
            multi: true,
        },
    ],
})
export class MolInputTextComponent implements ControlValueAccessor {
    @Input('FormControlNamed') FormControlNamed: FormControl;

    @Input('FormControlCaption') FormControlCaption: string;

    condition: boolean = true;

    @Input('templateForm') templateForm: string = 'LEFTRIGHT';

    constructor() { }

    OnInit(): void {
        if (this.templateForm == 'LEFTRIGHT') {
            this.condition = true;
        } else {
            this.condition = false;
        }
    }

    @HostBinding('attr.id') externalId = '';

    @Input() set id(value: string) {
        this._ID = value;
        this.externalId = null;
    }

    @Input('label') label: string;

    @Input('IsFormControlTouched') IsFormControlTouched: boolean;
    @Input('IsFormControlInvalid') IsFormControlInvalid: boolean;
    @Input('ValidatorsCaption') ValidatorsCaption: string;

    get id() {
        return this._ID;
    }

    private _ID = '';

    @Input('value') _value = '';
    onChange: any = () => { };
    onTouched: any = () => { };

    touched = false;

    disabled = false;

    get value() {
        return this._value;
    }

    set value(val) {
        this._value = val;
        this.onChange(val);
        this.onTouched();
    }

    registerOnChange(fn): void {
        this.onChange = fn;
    }

    registerOnTouched(fn): void {
        this.onTouched = fn;
    }

    markAsTouched(): void {
        if (!this.touched) {
            this.onTouched();
            this.touched = true;
        }
    }

    setDisabledState(disabled: boolean): void {
        this.disabled = disabled;
    }

    writeValue(value): void {
        // if (value) {
        this.value = value;
        // }
    }

    doChange($event): void {
        this.value = $event.target.value;
    }

    doTouched($event: any): void {
        this.touched = true;
    }
}
