import { Component, OnInit } from '@angular/core';
// import {LoginServiceService} from '../login-service.service';
import {Router} from '@angular/router'
import {HttpClient} from '@angular/common/http'
import { AuthService } from "angularx-social-login";

import { FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
declare var window: any;
declare var FB: any;
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss'],
  providers:[]
})
export class LoginpageComponent implements OnInit {

  public uName;
  public uPassword;
  public loginName;
  public validate:boolean=false;
  private user: SocialUser;
  constructor(private _router:Router,private http:HttpClient,private authService: AuthService) {
   
   }

  

  ngOnInit() {

  }


googleLoginClick(){
  var b=this.authService.signOut(false);
  console.log(b);
  var a= this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);

   console.log("Google ::",a);
   this.authService.authState.subscribe((user) => {
    this.user = user;
    console.log("user:::",this.user);
    this._router.navigate(['/Home']);
    // this.loggedIn = (user != null);
  });
}

facebookLoginClick(){
    
   var a= this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);

   console.log("Facebook",a);
   
   this.authService.authState.subscribe((user) => {
    this.user = user;
    console.log("user:::",this.user);
    
  });
  var b=this.authService.signOut(false); 
  console.log(b);
    
  }
 
 
}
