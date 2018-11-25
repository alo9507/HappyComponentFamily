import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SubmitButtonComponent } from './shared/components/buttons/submit-button/submit-button.component';
import { ChildComponent } from '@children/child/child.component';

import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import { BaseFamilyMemberComponent } from './family/base-family-member/base-family-member.component';
import { ParentComponent } from './family/parents/parent/parent.component';
import { FamilyComponent } from './family/family/family.component';
import { GrandparentComponent } from './family/grandparents/grandparent/grandparent.component';

@NgModule({
  declarations: [
    AppComponent,
    SubmitButtonComponent,
    ChildComponent,
    BaseFamilyMemberComponent,
    ParentComponent,
    FamilyComponent,
    GrandparentComponent
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
