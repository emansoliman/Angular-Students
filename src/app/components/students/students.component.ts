import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { Student } from 'src/app/models/student';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  subscriber: any;
  students: Student[] = [];
  filteredStudents: Student[] = [];
  filter: boolean = false;

  constructor(
    private studentsService: StudentsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getStudents();
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

  getStudents() {
    this.subscriber = this.studentsService.getStudents().subscribe({
      next: (response) => {
        this.students = response.body as Student[];
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getStudentDetails(studentId: string) {
    this.router.navigate(['students/' + studentId]);
  }

  recieveNewStudent(newStudent: boolean) {
    this.getStudents();
  }

  filterStudents(filteredStudents: Student[]) {
    this.filteredStudents = _.cloneDeep(filteredStudents);
    this.filter = true;
  }
}
