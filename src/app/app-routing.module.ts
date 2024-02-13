import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './template/profile/profile.component';
import { ContentComponent } from './content/content.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MessageComponent } from './template/message/message.component';
import { SettingsComponent } from './template/settings/settings.component';
import { NewsComponent } from './template/news/news.component';

const routes: Routes = [
  {path: '', component: ContentComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'message', component: MessageComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'news', component: NewsComponent},
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
