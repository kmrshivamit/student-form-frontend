import { Course } from "./course";
import { Hobby } from "./hobby";
import { Qualification } from "./qualification";

export class Student {
     id!:number;
	firstName!:string;
    gender!:string;
	lastName!:string;
	 emailId!:string;
	 mobileNumber!:string;
	 dateOfBirth!:Date;
	 address!:string;
	 city!:string;
	pinCode!:string;
	state!:string;
	 country!:string;
     courses!:Course[];
     qualifications!:Qualification[];
     hobbies!:Hobby[];

}
