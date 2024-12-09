import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DynamicFormLayout, DynamicFormModel } from '@ng-dynamic-forms/core';

@Component({
  selector: 'lib-app',
  template: `
    <app-dynamic-form
      [formLayout]="formLayout"
      [formGroup]="formGroup"
      [formModel]="formModel"
      [update_data]="update_data"
      [frmstrct]="frmstrct"
      [customcls]="customcls"
    ></app-dynamic-form>
    <app-dynamic-sub-form
      [formSubmitted]="formSubmitted"
      [subForm]="subForm"
      [formLayout]="subFormLayout"
      [clicked_data]="clicked_data"
      (multipleData)="addMultipleData($event)"
      (deleteMultipleData)="deleteRow($event)"
      (editMultipleData)="editRow($event)"
      (save)="onSaveClicked($event)"
      [validity]="formGroup.valid"
      (canceled)="cancel($event)"
    ></app-dynamic-sub-form>
  `,
  styles: [],
})
export class AppComponent {
  addMultipleData(event: any) {}
  deleteRow(event: any) {}
  editRow(event: any) {}
  onSaveClicked(event: any) {}
  cancel(event: any) {}
  title = 'dynamic-form';
  formLayout!: DynamicFormLayout;
  subFormLayout!: DynamicFormLayout;
  formGroup: FormGroup = this.fb.group([{}]);
  formModel!: DynamicFormModel;
  update_data: any;
  frmstrct: any;
  customcls: any;
  formSubmitted!: boolean;
  subForm!: any[];
  clicked_data: any;

  constructor(private fb: FormBuilder) {}
}
