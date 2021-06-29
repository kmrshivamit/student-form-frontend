import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { Hobby } from '../model/hobby';
import { Qualification } from '../model/qualification';
import { Student } from '../model/student';
import { CourseService } from '../service/course.service';
import { HobbyService } from '../service/hobby.service';
import { QualificationService } from '../service/qualification.service';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
hobbies!:Hobby[];
hobbiesChecked:Hobby[]=[];
qualifications:Qualification[]=[];
qualificationsChecked:Qualification[]=[];
coursesChecked:Course[]=[];
courses:Course[]=[];
student:Student=new Student();

  constructor(private  courseService:CourseService,
    private hobbyService:HobbyService
    , private qualificationService:QualificationService,
    private studentService:StudentService) { }

  ngOnInit(): void {
    this.getCourses();
    this.getHobbies();
    this.getQualifications();
  }
  private getCourses()
  {
    this.courseService.getCourses().subscribe( data=>{
      this.courses=data;
    });
  }
  private getHobbies()
  {
    this.hobbyService.getHobbies().subscribe( data=>{
      this.hobbies=data;
    });
  }
   show1()
  {
    return 100;
  }
  private getQualifications()
  {
    this.qualificationService.getQualifications().subscribe( data=>{
      this.qualifications=data;
    });
  }
  
  onSubmit():void{
   
    this.createStudent(); 

  }
  private createStudent():void{
    this.student.hobbies=this.hobbiesChecked;
    this.student.qualifications=this.qualificationsChecked;
    this.student.courses=this.coursesChecked
    console.log(this.student.hobbies)
    console.log(this.student);
    this.studentService.createStudent(this.student).subscribe(data=>{
      console.log(data);
    },
    error=>console.log(error));
  }


  onChangeCourse(event:any,course:Course){
    if(event.target.checked)
    {
    
     
     
      this.coursesChecked.push( course);

    }
    else{
      this.coursesChecked=this.coursesChecked.filter(i=>i.id!=course.id);

    }
    console.log(this.coursesChecked);
  }

  
  onChangeHobby(event:any,hobby:Hobby){
    if(event.target.checked)
    {
    
     
     
      this.hobbiesChecked.push( hobby);

    }
    else{
      this.hobbiesChecked=this.hobbiesChecked.filter(i=>i.id!=hobby.id);

    }
    console.log(this.hobbiesChecked);
  }

  onChangeQualification(event:any,qualification:Qualification){
    if(event.target.checked)
    {
    
     
     
      this.qualificationsChecked.push( qualification);

    }
    else{
      this.coursesChecked=this.coursesChecked.filter(i=>i.id!=qualification.id);

    }
    console.log(this.qualificationsChecked);
  }

}
