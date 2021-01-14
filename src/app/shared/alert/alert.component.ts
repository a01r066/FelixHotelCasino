import { Component, OnInit } from '@angular/core';
import {UiService} from '../../data-services/ui.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor(private uiService: UiService) { }

  ngOnInit(): void {
  }

  onClose(){
    this.uiService.alertChangedSub.next(false);
  }
}
