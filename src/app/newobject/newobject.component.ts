import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-newobject',
  templateUrl: './newobject.component.html',
  styleUrls: ['./newobject.component.scss']
})
export class NewobjectComponent implements OnInit {
  newObjectData: object;
  constructor(public dialogRef: MatDialogRef<NewobjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _http: HttpService) { }

  ngOnInit() {
  }

  onAddClick(newData): void {
    this._http.createObject(`${this.data.type}s`, newData).subscribe(data => {
      if (data) {
        console.log(data);
      }
    });
    console.log(`${this.data.type}s`);
    this.dialogRef.close();
  }
}
