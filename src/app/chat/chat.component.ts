import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

  items: FirebaseListObservable<any>;
  name: any;
  msgVal: string = '';

  // dependency injection in constructor to work with AngularFire

  constructor(public af: AngularFire) {

     // reference the items property to grab all of the items

    this.items = af.database.list('/items');

    // reference the items property to grab all of the messages from Firebase

    this.items = af.database.list('/messages', {

      // and use a query property limitToLast to limit the number of messages shown

      query: {
        limitToLast: 5
      }
    });

    // subscribe method after a user connects their facebook account, and set the name property to the result

    this.af.auth.subscribe(auth => {
      if (auth) {
        this.name = auth;
      }
    });
  }

  // login method that will be called in HTML template once a user clicks a button to login

  // provided by the AngularFire function that allows us to define 2 properties: provider and method

  login() {
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup
    });
  }

  // logout method that will be called in HTML template once a user clicks a button to logout

  logout() {
    this.af.auth.logout();
  }

  // creating chatSend method that will push new msg to AngularFire on enter

  // method takes in theirMessage as an argument

  chatSend(theirMessage: string) {

    // this.items.push sends message 2 message property; "name" is tied 2 this.name.facebook.displayName first and last name on Facebook

    this.items.push({ message: theirMessage, name: this.name.facebook.displayName});
    this.msgVal = '';

    //  use console.log(this.name); to see everything that's returned

  }

}
