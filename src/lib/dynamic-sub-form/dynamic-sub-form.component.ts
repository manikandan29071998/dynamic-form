import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DynamicFormLayout } from '@ng-dynamic-forms/core';

@Component({
  selector: 'app-dynamic-sub-form',
  templateUrl: './dynamic-sub-form.component.html',
  styleUrls: ['./dynamic-sub-form.component.css'],
})
export class DynamicSubFormComponent {
  @Input() subForm: any[] = [];
  @Input() formLayout!: DynamicFormLayout;
  @Input() clicked_data: any;
  @Input() formSubmitted = false;
  @Input() validity: any;
  @Output() multipleData: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteMultipleData: EventEmitter<any> = new EventEmitter<any>();
  @Output() editMultipleData: EventEmitter<any> = new EventEmitter<any>();
  @Output() save: EventEmitter<any> = new EventEmitter<any>();
  @Output() canceled: EventEmitter<any> = new EventEmitter<any>();

  formData(subForm: any) {
    return subForm.sort((a: any, b: any) => a.position - b.position);
  }

  addMultipleData(item: any) {
    this.multipleData.emit(item);
  }

  deleteRow(rowData: any, item: any) {
    this.deleteMultipleData.emit({ rowData: rowData, item: item });
  }
  editRow(rowData: any, item: any) {
    this.editMultipleData.emit({ rowData: rowData, item: item });
  }

  getEnableLabel() {
    let label: any;
    if (this.clicked_data === 'edit') {
      label = 'Update';
    }
    if (this.clicked_data === 'save') {
      label = 'Save';
    }
    return label;
  }

  getDisabledLabel() {
    let label: any;
    if (this.clicked_data === 'edit') {
      label = 'Updating...';
    }
    if (this.clicked_data === 'save') {
      label = 'Saving...';
    }
    return label;
  }

  onSaveClicked() {
    this.save.emit(this.subForm);
  }
  changeData(event: any) {
    this.save.emit(event);
  }

  cancel() {
    this.canceled.emit(true);
  }
}
