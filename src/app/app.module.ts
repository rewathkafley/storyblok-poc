import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoryblokDirective } from './storyblok.directive';
import { TeaserComponent } from './teaser/teaser.component';
import { GridComponent } from './grid/grid.component';
import { PageComponent } from './page/page.component';
import { FeatureComponent } from './feature/feature.component';
import {DynamicModule} from 'ng-dynamic-component';

@NgModule({
  declarations: [
    AppComponent,
    StoryblokDirective,
    TeaserComponent,
    GridComponent,
    PageComponent,
    FeatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DynamicModule.withComponents([
      PageComponent,
      TeaserComponent,
      GridComponent,
      FeatureComponent
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
