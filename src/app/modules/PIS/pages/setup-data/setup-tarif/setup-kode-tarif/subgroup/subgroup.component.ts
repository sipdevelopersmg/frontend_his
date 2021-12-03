import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
    selector: 'setup-kode-tarif-tab-subgroup',
    templateUrl: './subgroup.component.html',
    styleUrls: ['./subgroup.component.css']
})
export class SubgroupComponent implements OnInit {
    gridToolbar = [
        { text: "New", tooltipText: null, prefixIcon: "fas fa-plus", id: "new" },
        { text: "Edit", tooltipText: null, prefixIcon: "fas fa-pen", id: "edit" },
        { text: "Delete", tooltipText: null, prefixIcon: "fas fa-trash-alt", id: "delete" }
    ];
    modalRef: BsModalRef;

    constructor(private modalService: BsModalService) { }

    ngOnInit(): void {

    }

    onRowSelecting($event) {

    }

    onToolbarClick(args: any, template) {
        // ... Action ketika toolbar grid di click
        let action = args.item.id;
        switch (action) {
            case 'new':
                this.onOpenModal(template);
                break;
            case 'edit':
                this.onOpenModal(template);
                break;
            case 'delete':
                console.log('delete')
                break;
            default:
            // code block
        }
    }

    onOpenModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(
            template,
            Object.assign({}, { class: 'modal-lg modal-dialog-centered' })
        );
    }

    handleClickSaveGroup() {
        this.modalRef.hide()
    }

}
