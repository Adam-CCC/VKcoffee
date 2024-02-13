import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { ProfileComponent } from './template/profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MessageComponent } from './template/message/message.component';
import { SettingsComponent } from './template/settings/settings.component';
import { NewsComponent } from './template/news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    HeaderComponent,
    ContentComponent,
    ProfileComponent,
    NotFoundComponent,
    MessageComponent,
    SettingsComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
