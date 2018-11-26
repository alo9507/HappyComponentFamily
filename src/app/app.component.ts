import { Component, OnInit, AfterContentInit } from '@angular/core';
import { HappinessCalculatorService } from './shared/services/happiness-calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, AfterContentInit {
  private _containerBackground: any;

  public avgHappiness: number;

  constructor(private _happinessCalculator: HappinessCalculatorService) { }

  ngOnInit() {
    this._happinessCalculator.avgHappiness$
      .subscribe(
        avgHappiness => {
          this.avgHappiness = avgHappiness;
        }
      );
  }

  ngAfterContentInit() {
    this._containerBackground = document.querySelector('.family-container');

    this._happinessCalculator.avgHappiness$
    .subscribe(
      avgHappiness => {
        this._containerBackground.style.background = `rgb(81, ${avgHappiness},168)`;
      }
    );
  }

}
