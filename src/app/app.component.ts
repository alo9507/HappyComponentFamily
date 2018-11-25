import { Component, OnInit, AfterContentInit } from '@angular/core';
import { HappinessCalculatorService } from './shared/services/happiness-calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentInit {
  public avgHappiness: number;
  private _containerBackground: any;


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
