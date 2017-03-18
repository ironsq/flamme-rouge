import {Injectable, Inject} from "@angular/core";
import {FirebaseListObservable, AngularFire, FirebaseApp} from "angularfire2";
import * as firebase from "firebase";

@Injectable()
export class ScoreService {
  private tempScore: number;


  constructor(@Inject(FirebaseApp) private fb: firebase.app.App, private af: AngularFire) {
  }

  public findScoresByStage(stage: string): FirebaseListObservable<any> {
    //return this.af.database.list("/score/" + stage, {query: {orderByKey: true}});
    return null;
  }

  //public findRiderByName();

  /*public findScoreByName(name: string) {
   return this.af.database.list(("/score"))
   }*/

  public postRiderFinish(name: any, position: number, placement: any, round: any): void {
    let points: number;
    switch (placement) {
      case 1:
        points = 3;
        break;
      case 2:
        points = 2;
        break;
      case 3:
        points = 1;
        break;
      default:
        points = 0;
    }

    let scoreSheet = {[placement]: {"name": name, "position": position, "round": round, "points": points}};
    //{"4" : {"name" : "Banan", "position" : "2", "round" : 1}}
    this.af.database.object("/score/Dräparen/").update(scoreSheet).then(_ => {
      this.updateRiderPoints('Dräparen', name, placement);
    });
  }

  public findScores(): FirebaseListObservable<any> {
    return this.af.database.list("/score");
  }


  public updateRiderPoints(stage: string, name: string, placement: number): void {

    this.af.database.object('/score/' + stage + '/' + placement).subscribe(scoreObs => {
      this.fb.database().ref().child("/riders/" + scoreObs.name).once('value').then(currentPoints => {
        let totalPoints: number = currentPoints.val().points + scoreObs.points;
        this.af.database.object("/riders/" + name).update({points: totalPoints});
      });
    });

    //this.af.database.object("/riders/Aru").update({points: totalScore});

  }
}
