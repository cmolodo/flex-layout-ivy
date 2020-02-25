import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MediaQueryStatusComponent } from './media-query-status/media-query-status.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaQueryStatusComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
