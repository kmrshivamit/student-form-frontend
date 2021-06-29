import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-show-student',
  templateUrl: './show-student.component.html',
  styleUrls: ['./show-student.component.css']
})
export class ShowStudentComponent implements OnInit {
students!:Student[];
  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  private getStudents()
  {
    this.studentService.getStudentList().subscribe(data=>{
      this.students=data;
    });
  }

 show()
  {
    return 100;
  }

}
