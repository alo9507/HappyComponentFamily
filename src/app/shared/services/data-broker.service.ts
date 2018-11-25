import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataBrokerService {

  private ChildMood$$ = new BehaviorSubject<number>(50);
  public ChildMood$ = this.ChildMood$$.asObservable();

  private ParentMood$$ = new BehaviorSubject<number>(50);
  public ParentMood$ = this.ParentMood$$.asObservable();

  private GrandparentMood$$ = new BehaviorSubject<number>(50);
  public GrandparentMood$ = this.GrandparentMood$$.asObservable();

  public updateChildMood(mood: number): void {
    this.ChildMood$$.next(mood);
  }
  public updateParentMood(mood: number): void {
    this.ParentMood$$.next(mood);
  }
  public updateGrandparentMood(mood: number): void {
    this.GrandparentMood$$.next(mood);
  }



}
