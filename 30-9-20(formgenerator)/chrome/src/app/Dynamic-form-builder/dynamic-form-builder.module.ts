import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// components
import { DynamicFormBuilderComponent } from './dynamic-form-builder.component';
import { FieldBuilderComponent } from './field-builder/field-builder.component';
import { TextBoxComponent } from './atom/textbox';
import { DropDownComponent } from './atom/dropdown';
import { FileComponent } from './atom/file';
import { CheckBoxComponent } from './atom/checkbox';
import { RadioComponent } from './atom/radio';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [
    DynamicFormBuilderComponent,
    FieldBuilderComponent,
    TextBoxComponent,
    DropDownComponent,
    CheckBoxComponent,
    FileComponent,
    RadioComponent,
  ],
  exports: [DynamicFormBuilderComponent],
  providers: [],
})
export class DynamicFormBuilderModule {}
