export class RoomCategory {
  id?: string;
  title: string;
  desc: string;
  imagePath: string;

  constructor(id: string, dataObj: { title: string, desc: string, imagePath: string}) {
    this.id = id;
    this.title = dataObj.title;
    this.desc = dataObj.desc;
    this.imagePath = dataObj.imagePath;
  }
}
