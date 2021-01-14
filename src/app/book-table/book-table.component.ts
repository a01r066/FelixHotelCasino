import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UiService} from '../data-services/ui.service';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css']
})
export class BookTableComponent implements OnInit {
  bookingForm: FormGroup;

  constructor(private uiService: UiService) { }

  ngOnInit(): void {
    this.bookingForm = new FormGroup({
      fullName: new FormControl('', {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      phone: new FormControl('', {
        validators: [Validators.required, Validators.minLength(9)]
      })
    });
  }

  onBookNow(){
    this.uiService.alertChangedSub.next(true);
  }
}
