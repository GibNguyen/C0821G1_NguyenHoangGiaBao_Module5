import { Component, OnInit } from '@angular/core';
import {Student} from '../student';

@Component({
  selector: 'app-liststudent',
  templateUrl: './liststudent.component.html',
  styleUrls: ['./liststudent.component.css']
})
export class ListstudentComponent implements OnInit {

  public studentList = [];

  constructor() {
    this.studentList.push(new Student('bao', 1, 7));
    this.studentList.push(new Student('vy', 0, 9));
    this.studentList.push(new Student('du', 1, 10));
    this.studentList.push(new Student('a', 2, 10));
  }

  ngOnInit(): void {
  }

}
