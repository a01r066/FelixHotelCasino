export class UserModel {
  uid?: string;
  name?: string;
  email: string;
  password: string;
  imagePath?: string;

  constructor(uid: string, dataObj: { name: string, email: string, password: string, imagePath: string }) {
    this.uid = uid;
    this.name = dataObj.name;
    this.email = dataObj.email;
    this.password = dataObj.password;
    this.imagePath = dataObj.imagePath;
  }
}
