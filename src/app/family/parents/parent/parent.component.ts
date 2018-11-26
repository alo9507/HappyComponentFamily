import { Component, OnInit, AfterContentInit,  } from '@angular/core';
import { DataBrokerService } from 'src/app/shared/services/data-broker.service';
import { HappinessCalculatorService } from 'src/app/shared/services/happiness-calculator.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html'
})
export class ParentComponent implements OnInit, AfterContentInit {
  private _containerBackground: any;

  public myHappiness = 50;
  public sliderValue = 50;

  constructor(
    private _dataBroker: DataBrokerService,
    private _happinessCalculator: HappinessCalculatorService
    ) { }

    ngOnInit() {

      this._dataBroker.ChildMood$
        .subscribe(
          change => this.myHappiness = this._happinessCalculator.myHappiness(this.sliderValue)
        );

      this._dataBroker.GrandparentMood$
      .subscribe(
        change => this.myHappiness = this._happinessCalculator.myHappiness(this.sliderValue)
      );

    }

   ngAfterContentInit() {
    this._containerBackground = document.querySelector('.parent-container');

    this._happinessCalculator.avgHappiness$
    .subscribe(
      avgHappiness => {
        this._containerBackground.style.background = `rgb(81, ${this.myHappiness},168)`;
      }
    );
  }

  public input($event): void {
    this._dataBroker.updateParentMood($event.value);
    this.sliderValue = $event.value;
    this._containerBackground.style.background = `rgb(81, ${$event.value},168)`;
  }

  public change($event): void {
    this.sliderValue = $event.value;
  }

}
