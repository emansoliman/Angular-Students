import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})
export class StudentDetailsComponent implements OnInit {
  studentId: string;
  student: any;
  subscriber: any;

  constructor(
    private myActivatedRoute: ActivatedRoute,
    private studentsService: StudentsService
  ) {
    this.studentId = myActivatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getStudent();
  }

  getStudent() {
    this.subscriber = this.studentsService
      .getStudentById(this.studentId)
      .subscribe({
        next: (student) => {
          this.student = student;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  updateStudent(updateStudent: boolean) {
    this.getStudent();
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }
}
