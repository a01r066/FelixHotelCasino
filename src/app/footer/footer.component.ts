import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sendTo(){
    const subject = "Inquiry about web service.";
    window.open('mailto:vodachung2k12@gmail.com?subject=' + subject);
  }
}
