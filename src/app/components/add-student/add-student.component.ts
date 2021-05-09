import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  newStudent: Student = { id: '', name: '', email: '', age: 0 };
  validAge: boolean = false;
  addSubscriber: any;

  @Output() addedStudent: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private studentsService: StudentsService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  addStudent(myForm: any) {
    if (myForm.valid) {
      this.addSubscriber = this.studentsService
        .addStudent(this.newStudent)
        .subscribe({
          next: (student) => {
            this.addedStudent.emit(true);
            myForm.setValue({ name: '', email: '', age: 0 });
            this.addSubscriber.unsubscribe();
          },
          error: (err) => {
            console.log(err);
          },
        });
    }
  }

  checkAge(ageValue: number) {
    if (ageValue > 0 && ageValue <= 99) {
      this.validAge = true;
    } else {
      this.validAge = false;
    }
  }
}
