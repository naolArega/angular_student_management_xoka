import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NewobjectComponent } from '../newobject/newobject.component';
import { UpdateobjectComponent } from '../updateobject/updateobject.component';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  courses: object[];
  constructor(private _http: HttpService, public newDialog: MatDialog, public updateDialog: MatDialog) { }

  ngOnInit() {
    this._http.refreshData$.subscribe(() => {
      this.getAllCourse();
    });
    this.getAllCourse();
  }

  private getAllCourse() {
    this._http.getObjects("courses").subscribe(data => {
      if (data) {
        this.courses = data["result"];
      }
    });
  }

  openAddDialog(): void {
    const dialogRef = this.newDialog.open(NewobjectComponent, {
      width: '350px',
      data: { type: "course" }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openUpdateDialog(): void {
    const dialogRef = this.updateDialog.open(UpdateobjectComponent, {
      width: '350px',
      data: { type: "course" }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  deleteElement(id) {
    this._http.deleteObject("courses", id).subscribe(data => {
      if (data) {
        console.log(data);
      }
    });
  }
}
