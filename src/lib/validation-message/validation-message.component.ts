import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-validation-message',
  templateUrl: './validation-message.component.html',
  styleUrls: ['./validation-message.component.css'],
})
export class ValidationMessageComponent implements OnInit, OnChanges {
  @Input() control!: FormControl;
  @Input() controlModel: any;
  @Input() errMsg: any;
  @Input() cssClass: any;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {}
}
