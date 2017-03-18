import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AngularFireModule} from "angularfire2";
import {AppComponent} from "./app.component";
import {LeaderBoardComponent} from "./leader-board/leader-board.component";
import {PointsClassificationComponent} from "./points-classification/points-classification.component";
import {ScoreSheetComponent} from "./points-classification/score-sheet/score-sheet.component";

export const firebaseConfig = {
  apiKey: "AIzaSyAeyeq_c8EU8pien3OjFFymHrPJQnGVfE0",
  authDomain: "fr-app-eacd4.firebaseapp.com",
  databaseURL: "https://fr-app-eacd4.firebaseio.com",
  storageBucket: "fr-app-eacd4.appspot.com",
  messagingSenderId: "436790122884"
};

@NgModule({
  declarations: [
    AppComponent,
    LeaderBoardComponent,
    PointsClassificationComponent,
    ScoreSheetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
