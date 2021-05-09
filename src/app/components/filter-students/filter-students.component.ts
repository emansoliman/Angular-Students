import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-filter-students',
  templateUrl: './filter-students.component.html',
  styleUrls: ['./filter-students.component.css'],
})
export class FilterStudentsComponent implements OnInit {
  filterWith: string = '';
  @Input() students: Student[] = [];
  @Output()
  returnedFilteredStudents: EventEmitter<Student[]> = new EventEmitter();
  filteredStudents: Student[] = [];

  constructor() {}

  ngOnInit(): void {}

  filterStudents(searchValue: string) {
    this.filteredStudents = this.students.filter((student) => {
      return student.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
    });

    this.returnedFilteredStudents.emit(this.filteredStudents);
  }
}
