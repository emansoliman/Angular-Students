import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css'],
})
export class DeleteStudentComponent implements OnInit {
  @Input() student: Student = { id: '', name: '', email: '', age: 0 };
  subscriber: any;

  constructor(
    private router: Router,
    private studentsService: StudentsService
  ) {}

  ngOnInit(): void {}

  deleteStudent() {
    this.subscriber = this.studentsService
      .deleteStudent(this.student.id)
      .subscribe({
        next: (student) => {
          this.subscriber.unsubscribe();
          this.router.navigate(['']);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
