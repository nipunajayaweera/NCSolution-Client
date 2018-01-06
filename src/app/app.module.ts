import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './Client/my-new-component/my-new-component.component';
import { NavigationBarComponent } from './Client/navigation-bar/navigation-bar.component';
import { SideBarComponent } from './Client/side-bar/side-bar.component';
import { QuestionContainerComponent } from './Client/question-container/question-container.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    NavigationBarComponent,
    SideBarComponent,
    QuestionContainerComponent
  ],
  imports: [
    BrowserModule,AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
