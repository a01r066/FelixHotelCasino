import {Injectable} from '@angular/core';
import firebase from 'firebase';
import {UserModel} from './user.model';
import UserCredential = firebase.auth.UserCredential;
import {AuthData} from './auth-data.model';
import {UiService} from '../data-services/ui.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  user: UserModel;
  auth = firebase.auth();
  isAuthenticated = false;
  database = firebase.database();

  constructor(private router: Router,
              private uiService: UiService) {
  }

  initAuthListener(){
    this.auth.onAuthStateChanged(user => {
      if(user){
        // this.user = user;
        this.user = {
          uid: user.uid,
          email: user.email,
          password: ''
        };
        this.isAuthenticated = true;
        this.uiService.authChangedSub.next(true);
      } else {
        this.user = null;
        this.isAuthenticated = false;
        this.uiService.authChangedSub.next(false);
      }
    });
  }

  registerUser(registerData: any){
    // sign up with firebase
    const name = registerData.name;
    const email = registerData.email;
    const password = registerData.password;
    this.uiService.loadingStateChangedSub.next(true);
    this.auth.createUserWithEmailAndPassword(email, password).then(result => {
      this.updateUserToDB(result, name, password);
      this.uiService.loadingStateChangedSub.next(false);
      this.router.navigate(['/dashboard']);
    })
      .catch(error => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        this.uiService.loadingStateChangedSub.next(false);
        // this.snackBar.open(error.message, null, {
        //   duration: 3000
        // });
      });
  }

  login(authData: AuthData){
    // this.user = {
    //   email: authData.email,
    //   userID: Math.round(Math.random() * 10000).toString()
    // };
    // this.authChangeSub.next(true);
    // this.router.navigate(['/library']);

    // sign in with firebase
    const email = authData.email;
    const password = authData.password;


    this.uiService.loadingStateChangedSub.next(true);
    this.auth.signInWithEmailAndPassword(email, password).then(result => {
      this.uiService.loadingStateChangedSub.next(false);
      console.log("Login success!");
      this.router.navigate(['/dashboard']);
    })
      .catch(error => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        this.uiService.loadingStateChangedSub.next(false);
        console.log("Login error!" + error.message);
        // this.snackBar.open(error.message, null, {
        //   duration: 3000
        // });
      });
  }

  updateUserToDB(userData: UserCredential, name: string, password: string){
    const user = userData.user;
    const value = {
      name: name,
      email: user.email,
      password: password
    };
    this.database.ref('Users').child(user.uid).update(value).then(() => {
      // console.log(name + " added to firebase db");
    });
  }

  logout(){
    this.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    }).catch(error => {
    });
  }

  getUser(){
    return { ...this.user };
  }

  isAuth(){
    return this.isAuthenticated;
  }
}
