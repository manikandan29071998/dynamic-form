import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent {
  @Input() customcls: any = '';
  @Input() formFields: any;
  @Input() formLayout: any;
  @Input() formModel: any;
  @Input() formGroup: any;
  @Input() update_data: any;
  @Input() frmstrct: any = 'vertical';

  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  @Output() dataRender: EventEmitter<any> = new EventEmitter<any>();
  @Output() formData: EventEmitter<any> = new EventEmitter<any>();
  @Output() formDataChange: EventEmitter<any> = new EventEmitter<any>();

  screenWidth!: number;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
  }

  constructor() {}

  ngOnChanges() {
    this.formLayout;
    this.formGroup;

    for (const key in this.update_data) {
      if (this.update_data.hasOwnProperty(key)) {
        if (this.formGroup.get(key)) {
          this.formGroup.get(key)?.patchValue(this.update_data[key]);
        }
      }
    }
  }

  getErrMsgCss(frmCtrl: any) {
    let msgCls;
    msgCls = {
      color: '#e17055',
      'font-weight': 'bold',
      'font-size': '10px',
      width: '100%',
      position: 'static',
      padding: '0',
    };
    return msgCls;
  }

  getValidationControl(modelId: any) {
    var formControl: any;

    formControl = this.findFormControlById(modelId, this.formGroup);
    return formControl;
  }

  findFormControlById(modelId: any, frmGrp: any) {
    var findControl: any;
    findControl = frmGrp.get(modelId);
    return findControl;
  }

  structure() {
    if (this.frmstrct === 'horizontal') {
      return 'grid mx-2 form error';
    } else {
      return '';
    }
  }

  colStruct() {
    if (this.frmstrct === 'horizontal') {
      return 'col-4';
    } else {
      return '';
    }
  }

  inputEnter(data: any) {
    this.formData.emit(data);
  }
  inputChange(data: any) {
    this.formDataChange.emit(data);
  }
}
