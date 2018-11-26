import { Injectable } from '@angular/core';
import { DataBrokerService } from './data-broker.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class HappinessCalculatorService {
  private _childMood: number;
  private _parentMood: number;
  private _grandparentMood: number;
  private _avgHappiness: number;

  private avgHappiness$$ = new BehaviorSubject<number>(50);
  public avgHappiness$ = this.avgHappiness$$.asObservable();

  private memberMoodChange$$ = new BehaviorSubject<boolean>(false);
  public memberMoodChange$ = this.memberMoodChange$$.asObservable();

  constructor(private _dataBroker: DataBrokerService) {

    this._dataBroker.ChildMood$
    .subscribe(
      childMood => {
        this._childMood = childMood;
        this.avgHappiness$$.next(Math.ceil ((this._parentMood + this._childMood + this._grandparentMood) / 3 ));
      }
    );

    this._dataBroker.ParentMood$
    .subscribe(
      parentMood => {
        this._parentMood = parentMood;
        this.avgHappiness$$.next(Math.ceil ((this._parentMood + this._childMood + this._grandparentMood) / 3 ));
      }
    );

    this._dataBroker.GrandparentMood$
    .subscribe(
      grandparentMood => {
        this._grandparentMood = grandparentMood;
        this.avgHappiness$$.next(Math.ceil ((this._parentMood + this._childMood + this._grandparentMood) / 3 ));
      }
    );

    this.avgHappiness$
    .subscribe(
      avgHappiness => {
        this._avgHappiness = avgHappiness;
      }
    );
  }

  public myHappiness(currentValue: number): number {
    return Math.ceil((currentValue * 0.7) + (this._avgHappiness * 0.3));
  }

}
