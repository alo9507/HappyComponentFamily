import { Component, OnInit, AfterContentInit,  } from '@angular/core';
import { DataBrokerService } from 'src/app/shared/services/data-broker.service';
import { HappinessCalculatorService } from 'src/app/shared/services/happiness-calculator.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html'
})
export class ParentComponent implements OnInit, AfterContentInit {
  private _containerBackground: any;
  public slider: any;
  public myHappiness = 50;
  public sliderValue = 50;

  constructor(
    public dataBroker: DataBrokerService,
    public happinessCalculator: HappinessCalculatorService
    ) { }

    ngOnInit() {

      this.dataBroker.ChildMood$
        .subscribe(
          change => this.myHappiness = this.happinessCalculator.myHappiness(this.sliderValue)
        );

      this.dataBroker.GrandparentMood$
      .subscribe(
        change => this.myHappiness = this.happinessCalculator.myHappiness(this.sliderValue)
      );

    }

   ngAfterContentInit() {
    this._containerBackground = document.querySelector('.parent-container');
    this.slider = document.querySelector('mat-slider');
    console.log(this.slider.value);
  }

  public input($event): void {
    this.dataBroker.updateParentMood($event.value);
    this._containerBackground.style.background = `rgb(81, ${$event.value},168)`;
  }

}
