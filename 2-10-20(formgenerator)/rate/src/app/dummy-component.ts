import { Component, OnChanges, Input, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';

import { JsonSchemaFormService } from '@ajsf/core';

@Component({
  selector: 'dummy',
  template: ` <p>{{ name }}</p> `,
})
export class DummyComponent implements OnChanges, OnInit {
  formControl: AbstractControl;
  controlName: string;
  controlValue: any;
  @Input() layoutNode: any;
  @Input() layoutIndex: number[];
  @Input() dataIndex: number[];

  constructor(private jsf: JsonSchemaFormService) {}

  public ngOnInit() {
    this.jsf.initializeControl(this);
    console.log('dummy component initialised', this);
  }

  public ngOnChanges(changes) {
    console.log('Changes ----->', changes);
  }

  get name() {
    return this.jsf.getFormControlValue(this);
  }
}
