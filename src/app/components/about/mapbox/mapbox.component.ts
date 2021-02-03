import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import *  as  data from '../../../../assets/data/states.json';
@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.css']
})
export class MapboxComponent implements OnInit {
  @Input()
  set exploreVar(value: string) {
    if (this.mapItem)
      this.checkExplore(value);
  }
  @ViewChild('map') mapItem: ElementRef;

  stateData: any = (data as any).default;
  map: mapboxgl.Map;
  constructor() {
  }

  ngOnInit(): void {
    this.initializeMap();
    this.buildMap();
    this.listenMap();
  }


  initializeMap() {
    console.log("Initializing map for about me page");
    this.map = new mapboxgl.Map({
      accessToken: 'pk.eyJ1IjoiYm1lcnJpY2syMiIsImEiOiJja2trcDc4aTMwMDZhMnBycmV1NnJoYXhtIn0.d6tOaLn0oT8n6WXMjznyzg',
      container: 'map',
      style: 'mapbox://styles/mapbox/dark-v10', // stylesheet location
      center: [-97.9998, 41.8781], // starting position [lng, lat]
      zoom: 3, // starting zoom
      interactive: true
    });
  }

  checkExplore(val) {
    if (val) {
      this.mapItem.nativeElement.style.opacity = 1;
      this.mapItem.nativeElement.style.zIndex = 0;
    } else {
      this.mapItem.nativeElement.style.opacity = 0.55;
      this.mapItem.nativeElement.style.zIndex = -1;
    }
  }

  buildMap() {
    console.log("Adding state layer data");
    console.log(this.stateData);
    this.map.on('load', () => {
      this.map.addSource('california', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [
            this.stateData.features[0]
          ]
        }
      });

      this.map.addSource('illinois', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [
            this.stateData.features[1]
          ]
        }
      });
      this.map.addSource('indiana', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [
            this.stateData.features[2]
          ]
        }
      });
      this.map.addSource('northcarolina', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [
            this.stateData.features[3]
          ]
        }
      });

      this.map.addLayer({
        'id': 'california',
        'type': 'fill',
        'source': 'california',
        'paint': {
          'fill-color': '#00FFFF',
          'fill-opacity': 0.25
        }
      });

      this.map.addLayer({
        'id': 'california-outline',
        'type': 'line',
        'source': 'california',
        'paint': {
          'line-color': '#00FFFF',
          'line-width': 2
        }
      });

      this.map.addLayer({
        'id': 'illinois',
        'type': 'fill',
        'source': 'illinois',
        'paint': {
          'fill-color': '#00FFFF',
          'fill-opacity': 0.25
        }
      });

      this.map.addLayer({
        'id': 'illinois-outline',
        'type': 'line',
        'source': 'illinois',
        'paint': {
          'line-color': '#00FFFF',
          'line-width': 1
        }
      });

      this.map.addLayer({
        'id': 'indiana',
        'type': 'fill',
        'source': 'indiana',
        'paint': {
          'fill-color': '#00FFFF',
          'fill-opacity': 0.25
        }
      });

      this.map.addLayer({
        'id': 'indiana-outline',
        'type': 'line',
        'source': 'indiana',
        'paint': {
          'line-color': '#00FFFF',
          'line-width': 1
        }
      });

      this.map.addLayer({
        'id': 'northcarolina',
        'type': 'fill',
        'source': 'northcarolina',
        'paint': {
          'fill-color': '#00FFFF',
          'fill-opacity': 0.25
        }
      });

      this.map.addLayer({
        'id': 'northcarolina-outline',
        'type': 'line',
        'source': 'northcarolina',
        'paint': {
          'line-color': '#00FFFF',
          'line-width': 1
        }
      });
    });

  }

  listenMap() {
    //Listen for an illinois click
    this.map.on('click', 'illinois', (event) => {
      var html = `
      <div style="color: black;display:flex; flex-direction: column; justify-content: center; align-items:center;">
        <h1 style="font-size: 1.5em;">Home</h1>
        <h6 style="font-size: 1em; font-weight: 300;">Currently living in Kenilworth, IL right outside of Chicago. The windy city has been my home since 2018!</h6>
      </div>
      `;

      var marker = new mapboxgl.Popup()
        .setLngLat([event.lngLat.lng, event.lngLat.lat])
        .setHTML(html)
        .addTo(this.map);
    })
    //Listen for an illinois click
    this.map.on('click', 'california', (event) => {
      var html = `
      <div style="color: black;display:flex; flex-direction: column; justify-content: center; align-items:center;">
        <h1 style="font-size: 1.5em;">Work</h1>
        <h6 style="font-size: 1em; font-weight: 300;">For the year of 2021, I will be joining the team at Veeva to begin my professional career as an Associate Software Engineer!</h6>
      </div>
      `;
      var marker = new mapboxgl.Popup()
        .setLngLat([event.lngLat.lng, event.lngLat.lat])
        .setHTML(html)
        .addTo(this.map);
    })
    //Listen for an illinois click
    this.map.on('click', 'indiana', (event) => {
      var html = `
      <div style="color: black;display:flex; flex-direction: column; justify-content: center; align-items:center;">
        <h1 style="font-size: 1.5em;">College</h1>
        <h6 style="font-size: 1em; font-weight: 300;">From 2017-2021, I attended the University of Notre Dame and majored in Computer Science. I lived in St. Edward's hall and played on the club lacrosse team</h6>
      </div>
      `;
      var marker = new mapboxgl.Popup()
        .setLngLat([event.lngLat.lng, event.lngLat.lat])
        .setHTML(html)
        .addTo(this.map);
    })
    //Listen for an illinois click
    this.map.on('click', 'northcarolina', (event) => {
      var html = `
      <div class="home" style="color: black;display:flex; flex-direction: column; justify-content: center; align-items:center;">
        <h1 style="font-size: 1.5em;">High School</h1>
        <h6 style="font-size: 1em; font-weight: 300;">For most of my life, I lived in Winston Salem, NC where I attended Forsyth Country Day School for high school</h6>
      </div>
      `;
      var marker = new mapboxgl.Popup()
        .setLngLat([event.lngLat.lng, event.lngLat.lat])
        .setHTML(html)
        .addTo(this.map);
    })
  }
}
