import { Component, OnInit } from '@angular/core';
import { Course } from '../model/courses/model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})



export class CoursesComponent implements OnInit {

  courses: Course[] = [
    {_id: '1', name: 'Angular', category: 'Front-end'},
    {_id: '2', name: 'Angular2', category: 'Front-end2'},
    {_id: '3', name: 'Angular3', category: 'Front-end3'},
    {_id: '4', name: 'Angular4', category: 'Front-end4'}
  ];

  displayedColumns = ['name', 'category'];

  constructor() {
   //this.courses = [];
   }

  ngOnInit(): void {
  }

}
