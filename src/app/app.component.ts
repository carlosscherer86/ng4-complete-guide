import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCas_F_cAmmbFJsAyaYCPYDZLxqAtBDcQc",
      authDomain: "ng-recipe-book-6b76f.firebaseapp.com"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
