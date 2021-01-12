export class Room {
  id?: string;
  roomCateID: string;
  title: string;
  desc: string;
  beds: string;
  occupancy: string;
  size: string;
  view: string;
  ratesFrom: number;
  imagePaths: [string];

  constructor(id: string, roomCateID: string,
              // tslint:disable-next-line:max-line-length
              dataObj: {title: string, desc: string, beds: string, occupancy: string, size: string, view: string, ratesFrom: number, imagePaths: [string]}) {
    this.id = id;
    this.roomCateID = roomCateID;
    this.title = dataObj.title;
    this.desc = dataObj.desc;
    this.beds = dataObj.beds;
    this.occupancy = dataObj.occupancy;
    this.size = dataObj.size;
    this.view = dataObj.view;
    this.ratesFrom = dataObj.ratesFrom;
    this.imagePaths = dataObj.imagePaths;
  }
}
