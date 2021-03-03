import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NewobjectComponent } from '../newobject/newobject.component';
import { UpdateobjectComponent } from '../updateobject/updateobject.component';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})

export class StudentComponent implements OnInit {
  students: object[];
  constructor(private _http: HttpService, public newDialog: MatDialog, public updateDialog: MatDialog) { }

  ngOnInit() {
    this._http.refreshData$.subscribe(() => {
      this.getAllStudents();
    });
    this.getAllStudents();
  }

  private getAllStudents() {
    this._http.getObjects("students").subscribe(data => {
      if (data) {
        this.students = data["result"];
      }
    });
  }

  openAddDialog(): void {
    const dialogRef = this.newDialog.open(NewobjectComponent, {
      width: '350px',
      data: { type: "student" }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openUpdateDialog(id): void {
    const dialogRef = this.updateDialog.open(UpdateobjectComponent, {
      width: '350px',
      data: { type: "student", id: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  deleteElement(id) {
    this._http.deleteObject("students", id).subscribe(data => {
      if (data) {
        console.log(data);
      }
    });
  }
}
