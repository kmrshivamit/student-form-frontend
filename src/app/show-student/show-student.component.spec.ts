import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowStudentComponent } from './show-student.component';

describe('ShowStudentComponent', () => {
  let component: ShowStudentComponent;
  let fixture: ComponentFixture<ShowStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowStudentComponent ]
    })
    .compileComponents();
  });

  it('should return a value 100'),()=>
{
expect(component.show()).toBe(100);
}

  
});
