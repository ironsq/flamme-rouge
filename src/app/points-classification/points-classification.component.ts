import {Component, OnInit} from "@angular/core";
import {FirebaseListObservable} from "angularfire2";
import {TourService} from "../shared/service/tour.service";
import {ScoreService} from "../shared/service/score.service";

@Component({
  selector: 'app-points-classification',
  templateUrl: './points-classification.component.html',
  styleUrls: ['./points-classification.component.css'],
  providers: [TourService, ScoreService]
})
export class PointsClassificationComponent implements OnInit {

  public stages: FirebaseListObservable<any>;
  public scores: FirebaseListObservable<any>;

  constructor(private tourService: TourService,
              private scoreService: ScoreService) {
  }

  ngOnInit() {
    this.stages = this.tourService.fetchStages();
    this.scores = this.scoreService.findScoresByStage("Dräparen");
  }



}
