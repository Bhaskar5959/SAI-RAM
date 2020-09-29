import { Component } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { BehaviorSubject, Observable, of as observableOf } from 'rxjs';
import { NestedTreeControl } from '@angular/cdk/tree';

export class FileNode {
  children: FileNode[];
  filename: string;
  type: any;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tree';
  nestedTreeControl: NestedTreeControl<FileNode>;
  nestedDataSource: MatTreeNestedDataSource<FileNode>;
  dataChange: BehaviorSubject<FileNode[]> = new BehaviorSubject<FileNode[]>([]);

  constructor() {
    this.nestedTreeControl = new NestedTreeControl<FileNode>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();

    this.dataChange.subscribe(data => this.nestedDataSource.data = data);

    this.dataChange.next([
      {
        filename: "folder",
        type: "",
        children: [
          {
            filename: "test3",
            type: "exe",
            children: [],
          },
          {
            filename: "test4",
            type: "exe",
            children: [],
          }
        ],
      },

      {
        filename: "test2",
        type: "exe",
        children: [],
      },
      {
        filename: "files",
        type: "",
        children: [
          {
            filename: "few",
            type: "",
            children: [
              {
                filename: "test6",
                type: "text",
                children: [],
              }
            ],
          },
          {
            filename: "some",
            type: "",
            children: [
              {
                filename: "test7",
                type: "exe",
                children: [],
              }
            ],
          }
        ]
      },
      {
        filename: "test5",
        type: "exe",
        children: [],
      },
    ]);
  }

  private _getChildren = (node: FileNode) => { return observableOf(node.children); };

  hasNestedChild = (_: number, nodeData: FileNode) => { return !(nodeData.type); };
}
