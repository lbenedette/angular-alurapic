import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "alurapic";

  photos = [
    {
      url: "https://http.cat/100",
      description: "100"
    },
    {
      url: "https://http.cat/200",
      description: "200"
    }
  ]
}