export class EventModel {
  id?: string;
  title: string;
  desc: string;
  content: string;
  imagePath: string;
  fullImagePath: string;
  videoPath: string;
  dateStart: Date;
  dateEnd: Date;

  constructor(id: string, dataObj: { title: string, desc: string, content: string, imagePath: string, fullImagePath: string, videoPath: string, dateStart: Date, dateEnd: Date}) {
    this.id = id;
    this.title = dataObj.title;
    this.desc = dataObj.desc;
    this.content = dataObj.content;
    this.imagePath = dataObj.imagePath;
    this.fullImagePath = dataObj.fullImagePath;
    this.videoPath = dataObj.videoPath;
    this.dateStart = dataObj.dateStart;
    this.dateEnd = dataObj.dateEnd;
  }
}
