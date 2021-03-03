import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NewobjectComponent } from '../newobject/newobject.component';
import { UpdateobjectComponent } from '../updateobject/updateobject.component';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {
  classes: object[];
  constructor(private _http: HttpService, public newDialog: MatDialog, public updateDialog: MatDialog) { }

  ngOnInit() {
    this._http.refreshData$.subscribe(() => {
      this.getAllClass();
    });
    this.getAllClass();
  }

  private getAllClass() {
    this._http.getObjects("classes").subscribe(data => {
      if (data) {
        this.classes = data["result"];
      }
    });
  }

  openAddDialog(): void {
    const dialogRef = this.newDialog.open(NewobjectComponent, {
      width: '350px',
      data: { type: "class" }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openUpdateDialog(): void {
    const dialogRef = this.updateDialog.open(UpdateobjectComponent, {
      width: '350px',
      data: { type: "class" }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  deleteElement(id) {
    this._http.deleteObject("classes", id).subscribe(data => {
      if (data) {
        console.log(data);
      }
    });
  }
}
