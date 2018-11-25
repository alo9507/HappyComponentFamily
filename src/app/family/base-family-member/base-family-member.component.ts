import { Component, OnInit } from '@angular/core';
import { DataBrokerService } from 'src/app/shared/services/data-broker.service';
import { HappinessCalculatorService } from 'src/app/shared/services/happiness-calculator.service';

@Component({
  selector: 'app-base-family-member',
  templateUrl: './base-family-member.component.html',
  styleUrls: ['./base-family-member.component.css']
})
export class BaseFamilyMemberComponent implements OnInit {

  private _myHappiness = 50;
  get myHappiness() {
    return this._myHappiness;
  }
  set myHappiness(value: number) {
    this._myHappiness = value;
  }

  constructor() { }

  ngOnInit() {
  }

}
