import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentPipe } from './content-list/default-type.pipe';
import { HoverAffectDirective } from './hover-affect.directive';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './messages/messages.component';
 

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    ContentPipe,
    HoverAffectDirective,
    MessagesComponent
     
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
