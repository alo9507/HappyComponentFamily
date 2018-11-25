import { Component, OnInit, AfterContentInit, Input } from '@angular/core';
import { DataBrokerService } from 'src/app/shared/services/data-broker.service';
import { HappinessCalculatorService } from 'src/app/shared/services/happiness-calculator.service';
import { BaseFamilyMemberComponent } from '../../base-family-member/base-family-member.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: []
})
export class ChildComponent implements OnInit, AfterContentInit {
  private _containerBackground: any;
  public myHappiness = 50;
  public sliderValue = 50;

  constructor(
    private _dataBroker: DataBrokerService,
    private _happinessCalculator: HappinessCalculatorService
    ) { }

    ngOnInit() {

      this._dataBroker.ParentMood$
      .subscribe(
        change => this.myHappiness = this._happinessCalculator.myHappiness(this.sliderValue)
      );

      this._dataBroker.GrandparentMood$
      .subscribe(
        change => this.myHappiness = this._happinessCalculator.myHappiness(this.sliderValue)
      );

    }

   ngAfterContentInit() {
    this._containerBackground = document.querySelector('.child-container');

    this._happinessCalculator.avgHappiness$
    .subscribe(
      avgHappiness => {
        this._containerBackground.style.background = `rgb(81, ${this.myHappiness},168)`;
      }
    );
  }

  public input($event): void {
    this._dataBroker.updateChildMood($event.value);
    this.sliderValue = $event.value;
    this._containerBackground.style.background = `rgb(81, ${$event.value},168)`;
  }

}
