import { Component } from '@angular/core';
import { WidgetLibraryService } from '@ajsf/core';
import { DummyComponent } from './dummy-component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  public arrayFormOptions = {
    validateOnRender: false,
  };
  public arrayExample = {
    schema: {
      type: 'object',
      required: ['comments'],
      properties: {
        comments: {
          type: 'array',
          maxItems: 5,
          notitle: true,
          items: {
            type: 'object',
            properties: {
              name: {
                title: 'Name',
                type: 'string',
              },
              email: {
                title: 'Email',
                type: 'string',
                pattern: '^\\S+@\\S+$',
                description: 'Email will be used for evil.',
              },
              spam: {
                title: 'Spam',
                type: 'boolean',
                default: true,
              },
              comment: {
                type: 'string',
                maxLength: 20,
                validationMessages: {
                  required: "Don't be greedy!",
                  maxLength: 'Oh macha! Why are you messing with text length.',
                },
              },
            },
            required: ['name', 'comment'],
          },
        },
      },
    },
    layout: [
      {
        key: 'comments',
        add: null,
        remove: null,
        items: [
          {
            type: 'fieldset',
            legend: 'Comments {{$index}}',
            items: [
              {
                key: 'comments[].name',
                // enableErrorState: false,
                // enableSuccessState: false
              },
              'comments[].email',
              {
                title: 'Yes I want spam.',
                type: 'checkbox',
                key: 'comments[].spam',
                condition: 'model.comments[arrayIndex].email',
              },
              {
                type: 'textarea',
                key: 'comments[].comment',
              },
            ],
          },
        ],
      },
      {
        title: 'OK',
        type: 'submit',
        style: 'btn-info',
      },
    ],
  };

  public loginSchema = {
    type: 'object',
    properties: {
      marital_status: { type: 'string' },
      marriage_date: { type: 'string' },
      spouse_name: { type: 'string' },
      dummy: { type: 'string' },
    },
    required: ['spouse_name'],
  };

  public loginLayout = [
    {
      type: 'section',
      htmlClass: 'row',
      items: [
        {
          key: 'marital_status',
          htmlClass: 'col-sm-3',
          type: 'select',
          titleMap: [
            {
              value: 0,
              name: 'Married',
            },
            {
              value: 1,
              name: 'Single',
            },
            {
              value: 2,
              name: 'Divorced',
            },
          ],
        },
        {
          key: 'marriage_date',
          htmlClass: 'col-sm-3',
          type: 'date',
        },
        {
          key: 'spouse_name',
          description: 'This can be html as well',
          htmlClass: 'col-sm-3',
          type: 'text',
          disableErrorState: false,
          validationMessage: {
            required: 'I told you naa. You need to provide spouse name.',
          }, // not working
          placeholder: 'Input...',
          copyValueTo: ['dummy'],
          // feedback: {
          //   'glyphicon': true, 'glyphicon-asterisk':true
          // }
          // onChange: `function (modelValue, form) {
          //   console.log('onChange', modelValue, form);
          // }`
          // fieldHtmlClass: "btn btn-primary",     // CSS Class(es) to be added to field input (or similar)
          // labelHtmlClass: "btn btn-primary"     // CSS Class(es) to be added to the label of the field (or similar)
        },
        {
          key: 'dummy',
          htmlClass: 'col-sm-3',
          type: 'text',
        },
      ],
    },
    // {
    //   "type": "submit",
    //   "style": "btn-primary",
    //   "title": "Login"
    // }
  ];

  public loginData = { user_name: 'hitesh.kumar', password: '123abcxyz' };

  public loginOptions = {
    addSubmit: false,
    // validateOnRender: true,
    // supressPropertyTitles: false
    validationMessages: {
      required: function () {
        console.log('validation message');
      },
    },
  };

  data: any = null;

  constructor(private widgetLibrary: WidgetLibraryService) {
    widgetLibrary.registerWidget('dummy', DummyComponent);
    console.log(widgetLibrary.getAllWidgets());
  }

  onLogin(data) {
    console.log('Submitted form data --> ', data);
    this.data = data || null;
  }

  onError($event) {
    console.log('Event --> ', $event);
  }

  onChangeArray($event) {
    console.log('Array -->', $event);
  }

  onIsValid($event) {
    console.log('Is comment form valid --->', $event);
  }
}
