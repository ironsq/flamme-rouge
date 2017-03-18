import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable} from "angularfire2";

@Injectable()
export class TourService {

  constructor(private af:AngularFire) {
  }

  public fetchStages():FirebaseListObservable<any> {
    return this.af.database.list("/stages");
  }

  public fetchRiders():FirebaseListObservable<any> {
    return this.af.database.list("/riders");
  }

}
