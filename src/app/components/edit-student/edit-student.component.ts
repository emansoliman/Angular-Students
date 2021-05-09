import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css'],
})
export class EditStudentComponent implements OnInit {
  @Input() student: Student = { id: '', name: '', email: '', age: 0 };
  @Output() updateStudent: EventEmitter<boolean> = new EventEmitter();
  validAge: boolean = true;
  subscriber: any;

  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {}

  editStudent(myForm: any) {
    if (myForm.valid) {
      this.subscriber = this.studentsService
        .editStudent(this.student)
        .subscribe({
          next: (student) => {
            this.subscriber.unsubscribe();
            this.updateStudent.emit(true);
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
