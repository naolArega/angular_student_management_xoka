import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { ClassComponent } from './class/class.component';
import { CourseComponent } from './course/course.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "student", component: StudentComponent },
  { path: "class", component: ClassComponent },
  { path: "course", component: CourseComponent },
  { path: "test", component: TestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
