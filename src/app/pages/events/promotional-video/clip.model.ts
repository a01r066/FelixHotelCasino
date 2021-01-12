export class Clip {
  id?: string;
  title: string;
  desc: string;
  videoPath: string;
  period: Date;

  constructor(id: string, dataObj: { title: string, desc: string, videoPath: string, period: Date}) {
    this.id = id;
    this.title = dataObj.title;
    this.desc = dataObj.desc;
    this.videoPath = dataObj.videoPath;
    this.period = dataObj.period;
  }
}
