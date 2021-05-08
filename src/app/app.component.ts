import { Component } from '@angular/core';
import { ICurrentWeather } from './icurrent-weather';
import { WeatherService } from './weather/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Weather';

  constructor(){}

}
