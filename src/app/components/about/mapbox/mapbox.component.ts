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
      this.map.addSource('states', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [
            this.stateData.features[0],
            this.stateData.features[1],
            this.stateData.features[2],
            this.stateData.features[3],
            this.stateData.features[4],
          ]
        }
      });

      this.map.addLayer({
        'id': 'states',
        'type': 'fill',
        'source': 'states',
        'paint': {
          'fill-color': '#00DBFF',
          'fill-opacity': 0.5
        }
      });
    });

  }

  listenMap() {
    /*this.map.on('click', 'states', event => {
      console.log("Adding marker");
      var marker = new mapboxgl.Marker()
      .setLngLat([event.lon, event.lat])
      .addTo(this.map);
    })*/
  }
}
