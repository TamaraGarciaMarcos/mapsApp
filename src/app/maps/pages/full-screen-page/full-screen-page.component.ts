import { AfterViewInit, Component } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { setMapboxGlAccessToken } from '../../utils/mapbox-gl-access-token';



@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrl: './full-screen-page.component.css'
})
export class FullScreenPageComponent implements AfterViewInit{

  ngAfterViewInit(): void {

    // establecer el token de acceso de Mapbox GL antes de crear el mapa
    setMapboxGlAccessToken('pk.eyJ1IjoidGFtYXJhNjU1NSIsImEiOiJjbHYyYjd3am8wOXFiMnFvN2J1dDl4cnRxIn0.ARlwUwAErrm1xEPxno1Azg');

    const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9, // starting zoom
  });
  }



}
