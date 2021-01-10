import { Component, OnInit } from '@angular/core';
import {Slide} from './slide.model';
import {DataService} from '../../data-services/data.service';
import {UiService} from '../../data-services/ui.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  slides: Slide[] = [];
  imageObject: Array<object> = [];

  index = 0;

  constructor(private dataService: DataService,
              private uiService: UiService) { }

  ngOnInit(): void {
    this.dataService.getSlides();
    this.uiService.slidesSub.subscribe(slides => {
      this.slides = slides;
      slides.forEach(slide => {
        this.imageObject.push({
          image: slide.imagePath,
          thumbImage: slide.imagePath
        });
      });
    });

    // this.setInterval();
  }

  setInterval(){
    setInterval(() => {
      this.next();
    }, 2500);
  }

  previous(){
    if (this.index > 0){
      this.index -= 1;
    } else {
      this.index = this.slides.length - 1;
    }
    console.log(this.slides[this.index]);
  }

  next(){
    if (this.index < this.slides.length - 1){
      this.index += 1;
    } else {
      this.index = 0;
    }
    console.log(this.slides[this.index]);
  }
}
