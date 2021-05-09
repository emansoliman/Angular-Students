import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentsComponent } from './components/students/students.component';
import { StudentsService } from './services/students.service';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { DeleteStudentComponent } from './components/delete-student/delete-student.component';
import { FilterStudentsComponent } from './components/filter-students/filter-students.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentDetailsComponent,
    NotFoundComponent,
    AddStudentComponent,
    EditStudentComponent,
    DeleteStudentComponent,
    FilterStudentsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
