import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-font-size-edito',
  templateUrl: './font-size-edito.component.html',
  styleUrls: ['./font-size-edito.component.css']
})
export class FontSizeEditoComponent implements OnInit {
  fontSize = 14;
  constructor() { }

  ngOnInit(): void {
  }
  changeFontSizeValue(fontSize) {
    this.fontSize = fontSize;
  }
}
