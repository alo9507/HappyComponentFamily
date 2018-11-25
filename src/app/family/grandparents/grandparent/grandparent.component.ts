import { Component, OnInit, AfterContentInit } from '@angular/core';
import { BaseFamilyMemberComponent } from '../../base-family-member/base-family-member.component';
import { DataBrokerService } from 'src/app/shared/services/data-broker.service';
import { HappinessCalculatorService } from 'src/app/shared/services/happiness-calculator.service';

@Component({
  selector: 'app-grandparent',
  templateUrl: './grandparent.component.html'
})
export class GrandparentComponent implements OnInit, AfterContentInit {
  private _containerBackground: any;
  public myHappiness = 50;
  public sliderValue = 50;

  constructor(
    public dataBroker: DataBrokerService,
    public happinessCalculator: HappinessCalculatorService
    ) { }

    ngOnInit() {

    this.dataBroker.ParentMood$
    .subscribe(
      change => this.myHappiness = this.happinessCalculator.myHappiness(this.sliderValue)
    );

    this.dataBroker.ChildMood$
    .subscribe(
      change => this.myHappiness = this.happinessCalculator.myHappiness(this.sliderValue)
    );
    }

   ngAfterContentInit() {
    this._containerBackground = document.querySelector('.grandparent-container');
  }

  public input($event): void {
    this.dataBroker.updateGrandparentMood($event.value);
    this._containerBackground.style.background = `rgb(81, ${$event.value},168)`;
    this.sliderValue = $event.value;
  }

}
