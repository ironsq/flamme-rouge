import {Component, OnInit} from "@angular/core";
import {ScoreService} from "../shared/service/score.service";
import {FirebaseListObservable} from "angularfire2";
import {TourService} from "../shared/service/tour.service";
import initializeApp = firebase.initializeApp;

@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.css'],
  providers: [ScoreService, TourService]
})
export class LeaderBoardComponent implements OnInit {

  //private scoreService : ScoreService;
  public riders: FirebaseListObservable<any>;


  constructor(private scoreService: ScoreService,
              private tourService: TourService) {
  }

  /*subscribe(items => {
   items.forEach(fireRider => {
   let rider = new Rider();
   rider.name = fireRider.$key;
   rider.nation = fireRider.nation;
   rider.points = fireRider.points;
   this.riders.push(rider);
   })*/

  /*af.database.list('/stages').subscribe(stages => {
   stages.forEach(fireStage => {

   for(let item in fireStage) {
   let rider = af.database.object("/riders/" + item);
   rider.update({"points": fireStage[item]});
   }
   });
   });
   }*/

  ngOnInit() {
    this.riders = this.tourService.fetchRiders();
    /* let abc = this.scoreService.findScores();
     abc.subscribe(scores => {
     scores.forEach(s => {

     })
     });*/
  }

}
