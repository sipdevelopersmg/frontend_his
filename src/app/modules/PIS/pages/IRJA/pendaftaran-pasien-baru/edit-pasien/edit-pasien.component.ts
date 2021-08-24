import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-edit-pasien',
    templateUrl: './edit-pasien.component.html',
    styleUrls: ['./edit-pasien.component.css']
})
export class EditPasienIRJAComponent implements OnInit {

    FormEditPasien: FormGroup;
    FormPerson: FormGroup;
    FormAlamats: FormArray;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.onSetFormEditPasienAttributes();


        const dummy = {
            person: {
                no_identitas: 'ABC'
            },
            alamat_person: [
                {
                    alamat_lengkap: 'TES'
                }
            ]
        }

        this.FormEditPasien.setValue(dummy);
    }

    onSetFormEditPasienAttributes(): void {
        this.FormEditPasien = this.formBuilder.group({
            person: this.formBuilder.group({
                no_identitas: ["", []]
            }),
            alamat_person: this.formBuilder.array([]),
        });

        this.FormPerson = this.FormEditPasien.get('person') as FormGroup;

        this.FormAlamats = this.FormEditPasien.get('alamat_person') as FormArray;
        this.FormAlamats.push(this.onCreateNewFormArrayAlamat());
    }


    onCreateNewFormArrayAlamat(): FormGroup {
        return this.formBuilder.group({
            "alamat_lengkap": ["", []]
        });
    }

    handleSelectedTabId(args: any): void { }

    get no_identitas() { return this.FormEditPasien.get('person.no_identitas') };

    get alamat_person(): FormArray { return this.FormEditPasien.get('alamat_person') as FormArray }
}
