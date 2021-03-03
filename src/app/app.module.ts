import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './angular.materials';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { ClassComponent } from './class/class.component';
import { CourseComponent } from './course/course.component';
import { TestComponent } from './test/test.component';
import { NewobjectComponent } from './newobject/newobject.component';
import { UpdateobjectComponent } from './updateobject/updateobject.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    ClassComponent,
    CourseComponent,
    TestComponent,
    NewobjectComponent,
    UpdateobjectComponent
  ],
  entryComponents: [
    NewobjectComponent,
    UpdateobjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
