import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Room} from '../../../../pages/hotel/rooms/room.model';
import {DataService} from '../../../../data-services/data.service';
import firebase from 'firebase';

@Component({
  selector: 'app-ad-edit-room',
  templateUrl: './ad-edit-room.component.html',
  styleUrls: ['./ad-edit-room.component.css']
})
export class AdEditRoomComponent implements OnInit {
  roomFormGroup: FormGroup;
  room: Room;

  imagePath = '';
  fileData: File = null;
  previewUrl: any = null;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.room = this.dataService.selectedEditRoom;
    this.imagePath = this.room.imagePaths[0];

    this.roomFormGroup = new FormGroup({
      title: new FormControl('',{
        validators: [Validators.required]
      }),
      desc: new FormControl('', {
        validators: [Validators.required]
      }),
      beds: new FormControl('', {
        validators: [Validators.required]
      }),
      occupancy: new FormControl(),
      size: new FormControl(),
      view: new FormControl(),
      ratesFrom: new FormControl('', {
        validators: [Validators.required]
      })
    });

    this.roomFormGroup.patchValue({
      title: this.room.title,
      desc: this.room.desc,
      beds: this.room.beds,
      occupancy: this.room.occupancy,
      size: this.room.size,
      view: this.room.view,
      ratesFrom: this.room.ratesFrom,
      imagePaths: this.room.imagePaths
    });
  }

  onUpdate(){
    if(this.roomFormGroup.valid){
      // upload image
      if(this.fileData !== null){
        console.log("Image change");
        this.uploadImageFile();
      } else {
        console.log("Image not change");
        this.dataService.updateRoom(this.roomFormGroup.value, this.room);
      }
    }
    window.alert("Data updated successful!");
  }

  getRandomPlayed(min, max){
    return Math.round(Math.random() * (max - min) + min);
  }

  uploadImageFile(){
    const randonName = this.getRandomPlayed(9, 999999);
    const storageRef = firebase.storage().ref('Images').child('Rooms').child('Upload');
    // File or Blob named mountains.jpg
    const file = this.fileData;

    // Create the file metadata
    const metadata = {
      contentType: 'image/jpeg'
    };

    // Upload file and metadata to the object 'images/mountains.jpg'
    const uploadTask = storageRef.child(randonName + '_' + file.name).put(file, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
      snapshot => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            // console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            // console.log('Upload is running');
            break;
        }
      }, error => {

        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;

          case 'storage/canceled':
            // User canceled the upload
            break;
          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      }, () => {
        // Upload completed successfully, now we can get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
          // console.log('File available at', downloadURL);
          const formData = {
            title: this.roomFormGroup.value.title,
            desc: this.roomFormGroup.value.desc,
            beds: this.roomFormGroup.value.beds,
            size: this.roomFormGroup.value.size,
            view: this.roomFormGroup.value.view,
            ratesFrom: this.roomFormGroup.value.ratesFrom,
            occupancy: this.roomFormGroup.value.occupancy,
            imagePaths: [downloadURL]
          };
          this.dataService.updateRoom(formData, this.room);
          window.alert("Data updated successful!");
          // return to Rooms List
        });
      });
  }

  fileProgress(fileInput: any) {
    this.fileData = <File> fileInput.target.files[0];
    this.preview();
  }

  preview() {
    // Show preview
    let mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    let reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (_event) => {
      this.previewUrl = reader.result;
      this.imagePath = this.previewUrl;
    };
  }
}
