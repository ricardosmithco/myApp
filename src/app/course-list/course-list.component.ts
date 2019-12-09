import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  courses: any[] = [
    {courseId: 1, courseName: "Node JS"},
    {courseId: 2, courseName: "Typescript"},
    {courseId: 3, courseName: "Angular"},
    {courseId: 4, courseName: "React Js"}
  ];

}
