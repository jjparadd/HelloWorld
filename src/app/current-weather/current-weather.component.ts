import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICurrentWeather } from '../icurrent-weather'
import { IWeatherService, WeatherService } from '../weather/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})

export class CurrentWeatherComponent implements OnInit
{
  current$: Observable<ICurrentWeather>

  constructor(private weatherService: WeatherService) 
  {
    this.current$ = this.weatherService.currentWeather$
  }

  ngOnInit(): void
  {

  }

}
