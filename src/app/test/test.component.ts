import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewobjectComponent } from '../newobject/newobject.component';
import { UpdateobjectComponent } from '../updateobject/updateobject.component';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  tests: object[];
  constructor(private _http: HttpService, public newDialog: MatDialog, public updateDialog: MatDialog) { }

  ngOnInit() {
    this._http.refreshData$.subscribe(() => {
      this.getAllTests();
    });
    this.getAllTests();
  }

  private getAllTests() {
    this._http.getObjects("tests").subscribe(data => {
      if (data) {
        this.tests = data["result"];
      }
    });
  }

  openAddDialog(): void {
    const dialogRef = this.newDialog.open(NewobjectComponent, {
      width: '350px',
      data: { type: "test" }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openUpdateDialog(): void {
    const dialogRef = this.updateDialog.open(UpdateobjectComponent, {
      width: '350px',
      data: { type: "test" }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  deleteElement(id) {
    this._http.deleteObject("tests", id).subscribe(data => {
      if (data) {
        console.log(data);
      }
    });
  }
}
