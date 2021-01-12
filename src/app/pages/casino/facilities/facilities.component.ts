import { Component, OnInit } from '@angular/core';
import {Slide} from '../../about/slide.model';
import {DataService} from '../../../data-services/data.service';
import {UiService} from '../../../data-services/ui.service';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent implements OnInit {
  slides: Slide[] = [];
  imageObject: Array<object> = [];

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
  }
}
