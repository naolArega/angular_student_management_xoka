import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-updateobject',
  templateUrl: './updateobject.component.html',
  styleUrls: ['./updateobject.component.scss']
})
export class UpdateobjectComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UpdateobjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _http: HttpService) { }

  ngOnInit() {
  }

  onUpdateClick(updateData): void {
    this._http.updateObject(`${this.data.type}s`, this.data.id, updateData).subscribe(data => {
      if (data) {
        console.log(data);
      }
    });
    this.dialogRef.close();
  }
}

