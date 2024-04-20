import { Component, Input,OnInit } from '@angular/core';
import {Country} from "../../model/country.entity";
import {CalendarApiService} from "../../services/calendar-api.service";
@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})
export class CountryListComponent implements OnInit {
  countries: Country[] = [];

  constructor(private calendarApiService: CalendarApiService) {}

  ngOnInit() {
    this.calendarApiService.getSources().subscribe(
      (data: any) => { // Cambia 'any' por el tipo adecuado si tienes una interfaz definida
        // Asegúrate de acceder a la propiedad correcta de la respuesta.
        // De acuerdo a tu estructura de respuesta de la API, la clave que contiene los países es `response.countries`
        this.countries = data.response.countries;
      },
      error => {
        console.error('Error fetching countries:', error);
      }
    );
  }
}
