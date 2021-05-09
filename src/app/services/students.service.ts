import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  readonly baseURL: string =
    '  http://localhost:3000/students';

  constructor(private client: HttpClient) { }

  getStudents() {
    let response = this.client.get(this.baseURL, { observe: 'response' });

    return response;
  }

  getStudentById(studentId: string) {
    return this.client.get(`${this.baseURL}/${studentId}`);
  }

  addStudent(newStudent: Student) {
    let response = this.client.post(this.baseURL, {
      name: newStudent.name,
      email: newStudent.email,
      age: newStudent.age,
    });
    console.log(response);
    return response;
  }

  editStudent(student: Student) {
    return this.client.put(`${this.baseURL}/${student.id}`, student);
  }

  deleteStudent(studentId: string) {
    return this.client.delete(`${this.baseURL}/${studentId}`);
  }
}
