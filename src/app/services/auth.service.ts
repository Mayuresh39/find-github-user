import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { stringify } from 'querystring';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth){
  }


 public signUp = (email: string,password: string)  =>  {
    return this.auth.createUserWithEmailAndPassword(email,password);
 }

 public signIn = (email:string, password:string) => {
   return this.auth.signInWithEmailAndPassword(email,password);
 }

 public getUser = () => {
   return this.auth.authState;
 }

 public signOut = () => {
   return this.auth.signOut();
 }





}
