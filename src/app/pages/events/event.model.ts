export class EventModel {
  id?: string;
  title: string;
  desc: string;
  content: string;
  imagePath: string;
  videoPath: string;
  issudeDate: Date;

  constructor(id: string, dataObj: { title: string, desc: string, content: string, imagePath: string, videoPath: string, issueDate: Date}) {
    this.id = id;
    this.title = dataObj.title;
    this.desc = dataObj.desc;
    this.content = dataObj.content;
    this.imagePath = dataObj.imagePath;
    this.videoPath = dataObj.videoPath;
    this.issudeDate = dataObj.issueDate;
  }
}
