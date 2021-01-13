import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../data-services/data.service';
import {Slide} from '../../about/slide.model';
import {UiService} from '../../../data-services/ui.service';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-hotel-facility',
  templateUrl: './hotel-facility.component.html',
  styleUrls: ['./hotel-facility.component.css'],
  animations: [
    trigger('fadeSlideInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0, transform: 'translateY(10px)' })),
      ]),
    ])
  ]
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
