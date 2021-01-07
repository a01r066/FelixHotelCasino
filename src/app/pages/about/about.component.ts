import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  slidePaths = [
    '../../assets/img/slideshow/sld00.jpg',
    '../../assets/img/slideshow/sld01.jpg',
    '../../assets/img/slideshow/sld02.jpg',
    '../../assets/img/slideshow/sld03.jpg',
    '../../assets/img/slideshow/sld04.jpg',
    '../../assets/img/slideshow/sld05.jpg',
    '../../assets/img/slideshow/sld06.jpg',
    '../../assets/img/slideshow/sld07.jpg',
    '../../assets/img/slideshow/sld08.jpg',
    '../../assets/img/slideshow/sld09.jpg',
    '../../assets/img/slideshow/sld10.jpg',
    '../../assets/img/slideshow/sld11.jpg',
    '../../assets/img/slideshow/sld12.jpg',
    '../../assets/img/slideshow/sld13.jpg',
    '../../assets/img/slideshow/sld14.jpg',
    '../../assets/img/slideshow/sld15.jpg',
  ];

  index = 0;

  constructor() { }

  ngOnInit(): void {
  }

  previous(){
    if (this.index > 0){
      this.index -= 1;
    } else {
      this.index = this.slidePaths.length - 1;
    }
    console.log(this.slidePaths[this.index]);
  }

  next(){
    if (this.index < this.slidePaths.length - 1){
      this.index += 1;
    } else {
      this.index = 0;
    }
    console.log(this.slidePaths[this.index]);
  }
}
