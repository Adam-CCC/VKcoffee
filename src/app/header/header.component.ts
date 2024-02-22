import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    title = "VKC";

    showAlert(){
      alert("Тут будет авторизация")
    }
}
