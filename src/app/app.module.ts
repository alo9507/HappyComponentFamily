import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from '@children/child/child.component';

import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import { ParentComponent } from './family/parents/parent/parent.component';
import { GrandparentComponent } from './family/grandparents/grandparent/grandparent.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
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
