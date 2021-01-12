import {Component, OnInit} from '@angular/core';
import {Clip} from './clip.model';
import {DataService} from '../../../data-services/data.service';
import {UiService} from '../../../data-services/ui.service';
import {Router} from '@angular/router';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-promotional-video',
  templateUrl: './promotional-video.component.html',
  styleUrls: ['./promotional-video.component.css']
})
export class PromotionalVideoComponent implements OnInit {
  clips: Clip[] = [];
  safeURLs: SafeResourceUrl[] = [];
  // https://stackoverflow.com/questions/2068344/how-do-i-get-a-youtube-video-thumbnail-from-the-youtube-api
  thumbnail: any = 'http://i.ytimg.com/vi/xecedkJpa_U/sddefault.jpg';

  constructor(private dataService: DataService,
              private uiService: UiService,
              private router: Router,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.dataService.getPromotionalVideos();
    this.uiService.clipsSub.subscribe(clips => {
      this.clips = clips;
      clips.forEach(clip => {
        const safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(clip.videoPath);
        this.safeURLs.push(safeURL);
      });
    });
  }
}
