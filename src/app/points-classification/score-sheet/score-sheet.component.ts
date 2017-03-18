import {Component, OnInit} from "@angular/core";
import {FirebaseListObservable} from "angularfire2";
import {Rider} from "../../shared/model/rider";
import {ScoreService} from "../../shared/service/score.service";
import {TourService} from "../../shared/service/tour.service";

@Component({
  selector: 'app-score-sheet',
  templateUrl: './score-sheet.component.html',
  styleUrls: ['./score-sheet.component.css'],
  providers: [ScoreService, TourService]
})

export class ScoreSheetComponent implements OnInit {

  public riders: FirebaseListObservable<any>;
  //scoreSheets: Array<ScoreSheet> = [];

  public name: any;
  public position: number;
  public placement: number;
  public round: number =  1;

  constructor(private scoreService: ScoreService,
              private tourService: TourService) {
    /*this.riders = af.database.list('/riders');
    let sheet = new ScoreSheet();
    sheet.points = 3;
    this.scoreSheets.push(sheet);
    sheet = new ScoreSheet();
    sheet.points = 2;
    this.scoreSheets.push(sheet);
    sheet = new ScoreSheet();
    sheet.points = 1;
    this.scoreSheets.push(sheet);
    this.af = af;*/
  }

  ngOnInit() {
    if(this.placement === undefined) {
      this.placement = 1;
    }

    this.riders = this.tourService.fetchRiders();
  }

  onSubmit(form: any): void {
    /*this.af.database.object("/score/Dräparen/0").update({name: form['first'], points: 3});
    this.af.database.object("/score/Dräparen/1").update({name: form['second'], points: 2});
    this.af.database.object("/score/Dräparen/2").update({name: form['third'], points: 1});



    let points: number;
    let firstPlace: string = form['first'];
    this.af.database.object("/riders/" + form['first'])
      .subscribe((rider) => {
        points = 3 + rider.points;
      });

    this.af.database.object("/riders/" + firstPlace).update({points: points})*/

    this.scoreService.postRiderFinish(this.name, this.position, this.placement, 1);
    this.placement++;
  }

}
