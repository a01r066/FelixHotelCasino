import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../data-services/data.service';
import {Slide} from '../../about/slide.model';
import {UiService} from '../../../data-services/ui.service';

@Component({
  selector: 'app-hotel-facility',
  templateUrl: './hotel-facility.component.html',
  styleUrls: ['./hotel-facility.component.css']
})
export class HotelFacilityComponent implements OnInit {
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
